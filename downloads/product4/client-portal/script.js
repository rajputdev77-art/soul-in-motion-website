/* =====================================================================
   Soul in Motion — Client Portal
   Handles login, navigation, messages, files, and small UI niceties.
   Pure vanilla JS — no build step, no dependencies.
   ===================================================================== */

(function () {
  'use strict';

  // -----------------------------------------------------------------
  // Config — change this password per client (see README for guidance)
  // -----------------------------------------------------------------
  var CLIENT_PASSWORD = 'client2025';
  var CLIENT_NAME = 'there';            // Optional: personalize for each client
  var SESSION_KEY = 'sim_portal_session';
  var SESSION_TTL_HOURS = 12;

  var page = document.body;
  var isLogin = page.classList.contains('login-page');
  var isDashboard = page.classList.contains('dashboard-page');

  // -----------------------------------------------------------------
  // Session helpers
  // -----------------------------------------------------------------
  function setSession() {
    var payload = {
      v: 1,
      ts: Date.now(),
      ttl: SESSION_TTL_HOURS * 60 * 60 * 1000
    };
    try {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(payload));
    } catch (e) {
      // Storage might be disabled; fall back silently
    }
  }

  function isSessionValid() {
    try {
      var raw = sessionStorage.getItem(SESSION_KEY);
      if (!raw) return false;
      var data = JSON.parse(raw);
      if (!data || !data.ts || !data.ttl) return false;
      return Date.now() - data.ts < data.ttl;
    } catch (e) {
      return false;
    }
  }

  function clearSession() {
    try { sessionStorage.removeItem(SESSION_KEY); } catch (e) {}
  }

  // -----------------------------------------------------------------
  // LOGIN PAGE
  // -----------------------------------------------------------------
  function initLogin() {
    if (isSessionValid()) {
      window.location.replace('dashboard.html');
      return;
    }

    var form = document.getElementById('loginForm');
    var input = document.getElementById('password');
    var errorEl = document.getElementById('loginError');
    var yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    if (!form || !input) return;

    function showError(msg) {
      if (!errorEl) return;
      errorEl.textContent = msg;
      input.focus();
      input.select();
    }

    function clearError() {
      if (errorEl) errorEl.textContent = '';
    }

    input.addEventListener('input', clearError);

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      clearError();
      var attempt = (input.value || '').trim();
      if (!attempt) {
        showError('Please enter your access password.');
        return;
      }
      if (attempt === CLIENT_PASSWORD) {
        setSession();
        window.location.assign('dashboard.html');
      } else {
        showError('That password did not work. Double-check spacing and capitalization.');
      }
    });

    setTimeout(function () { input.focus(); }, 120);
  }

  // -----------------------------------------------------------------
  // DASHBOARD PAGE
  // -----------------------------------------------------------------
  function initDashboard() {
    if (!isSessionValid()) {
      window.location.replace('index.html');
      return;
    }

    setActiveSectionFromHash();
    initNavScrollSpy();
    initLogout();
    initFileActions();
    initMessageForm();
    populateClientName();
    populateLastUpdated();
  }

  function populateClientName() {
    var nameEl = document.getElementById('clientName');
    if (nameEl && CLIENT_NAME) nameEl.textContent = CLIENT_NAME;
  }

  function populateLastUpdated() {
    var el = document.getElementById('lastUpdated');
    if (!el) return;
    var d = new Date();
    var opts = { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    el.textContent = d.toLocaleString(undefined, opts);
  }

  function setActiveSectionFromHash() {
    var hash = (window.location.hash || '#status').replace('#', '');
    var links = document.querySelectorAll('.portal-nav .nav-link');
    links.forEach(function (link) {
      link.classList.toggle('active', link.dataset.section === hash);
    });
  }

  function initNavScrollSpy() {
    var sections = document.querySelectorAll('.portal-section');
    var links = document.querySelectorAll('.portal-nav .nav-link');
    if (!sections.length || !('IntersectionObserver' in window)) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id;
          links.forEach(function (link) {
            link.classList.toggle('active', link.dataset.section === id);
          });
        }
      });
    }, { rootMargin: '-30% 0px -55% 0px', threshold: 0 });

    sections.forEach(function (s) { observer.observe(s); });

    links.forEach(function (link) {
      link.addEventListener('click', function (e) {
        var section = link.dataset.section;
        var target = document.getElementById(section);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', '#' + section);
      });
    });
  }

  function initLogout() {
    var btn = document.getElementById('logoutBtn');
    if (!btn) return;
    btn.addEventListener('click', function () {
      clearSession();
      window.location.assign('index.html');
    });
  }

  function initFileActions() {
    var actions = document.querySelectorAll('.file-action');
    actions.forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        var row = a.closest('.file-row');
        var titleEl = row ? row.querySelector('.file-title') : null;
        var title = titleEl ? titleEl.textContent.trim() : 'this file';
        var verb = a.dataset.action === 'open' ? 'Opening' : 'Preparing';
        flash(verb + ' "' + title + '"…');
      });
    });
  }

  function initMessageForm() {
    var form = document.getElementById('messageForm');
    if (!form) return;
    var input = document.getElementById('messageInput');
    var list = document.querySelector('.message-list');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!input || !list) return;
      var text = (input.value || '').trim();
      if (!text) return;

      var msg = document.createElement('article');
      msg.className = 'message message-you';

      var meta = document.createElement('div');
      meta.className = 'message-meta';

      var author = document.createElement('span');
      author.className = 'message-author';
      author.textContent = 'You';

      var time = document.createElement('span');
      time.className = 'message-time';
      var d = new Date();
      time.textContent = 'Just now · ' + d.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' });

      meta.appendChild(author);
      meta.appendChild(time);

      var p = document.createElement('p');
      p.textContent = text;

      msg.appendChild(meta);
      msg.appendChild(p);
      list.appendChild(msg);

      input.value = '';
      msg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });

    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
        form.requestSubmit();
      }
    });
  }

  // -----------------------------------------------------------------
  // Tiny inline toast / flash message
  // -----------------------------------------------------------------
  var flashTimer = null;
  function flash(message) {
    var existing = document.getElementById('simFlash');
    if (existing) existing.remove();

    var el = document.createElement('div');
    el.id = 'simFlash';
    el.textContent = message;
    Object.assign(el.style, {
      position: 'fixed',
      bottom: '24px',
      left: '50%',
      transform: 'translateX(-50%) translateY(20px)',
      background: '#141417',
      color: '#f5f5f7',
      border: '1px solid rgba(176, 141, 87, 0.5)',
      padding: '12px 20px',
      borderRadius: '10px',
      fontSize: '14px',
      fontFamily: 'inherit',
      boxShadow: '0 14px 36px rgba(0,0,0,0.5)',
      opacity: '0',
      transition: 'opacity 180ms ease, transform 180ms ease',
      zIndex: '999'
    });
    document.body.appendChild(el);

    requestAnimationFrame(function () {
      el.style.opacity = '1';
      el.style.transform = 'translateX(-50%) translateY(0)';
    });

    if (flashTimer) clearTimeout(flashTimer);
    flashTimer = setTimeout(function () {
      el.style.opacity = '0';
      el.style.transform = 'translateX(-50%) translateY(20px)';
      setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 220);
    }, 2200);
  }

  // -----------------------------------------------------------------
  // Boot
  // -----------------------------------------------------------------
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  function boot() {
    if (isLogin) initLogin();
    else if (isDashboard) initDashboard();
  }
})();
