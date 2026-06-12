(function () {
  const LANG_KEY = 'uxcog_lang';

  function getCurrentLang() {
    return localStorage.getItem(LANG_KEY) || 'fr';
  }

  function get(lang, key) {
    return key.split('.').reduce(function (obj, k) {
      return obj && obj[k] !== undefined ? obj[k] : undefined;
    }, translations[lang]);
  }

  function apply(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = get(lang, el.dataset.i18n);
      if (val !== undefined) el.textContent = val;
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var val = get(lang, el.dataset.i18nHtml);
      if (val !== undefined) el.innerHTML = val;
    });

    var pageKey = document.documentElement.dataset.page;
    if (pageKey) {
      var title = get(lang, 'page.title.' + pageKey);
      if (title) document.title = title;
    }

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var isActive = btn.dataset.lang === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive);
    });
  }

  window.setLanguage = function (lang) {
    localStorage.setItem(LANG_KEY, lang);
    apply(lang);
  };

  document.addEventListener('DOMContentLoaded', function () {
    apply(getCurrentLang());
  });
})();
