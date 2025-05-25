document.addEventListener("DOMContentLoaded", () => {
  // Tag animations
  const tags = document.querySelectorAll(".tag");
  tags.forEach((tag, index) => {
    tag.style.animationDelay = `${0.3 + index * 0.2}s`;
    tag.classList.add("animated-tag");
  });

  // Guest Dropdown
  const guestToggle = document.getElementById('guest-toggle');
  const guestDropdown = document.querySelector('.guests-dropdown');

  guestToggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    guestDropdown.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (!guestDropdown?.contains(e.target)) {
      guestDropdown?.classList.remove('active');
    }
  });

  // Tab Switching
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(tab.getAttribute('data-tab')).classList.add('active');
    });
  });

  // Map Switching ✅ FIXED HERE
  document.querySelectorAll('.city-btn').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.city-btn').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const newSrc = button.getAttribute('data-src');
      document.getElementById('google-map-frame').setAttribute('src', newSrc);
    });
  });

  // Mobile Menu Toggle
  const toggleBtn = document.getElementById("mobileNavToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  const logoutToggle = document.querySelector(".logout-toggle");
  const logoutMenu = document.querySelector(".logout-menu");

  toggleBtn?.addEventListener("click", () => {
    mobileMenu?.classList.toggle("active");
  });

  logoutToggle?.addEventListener("click", (e) => {
    e.stopPropagation();
    logoutMenu?.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    if (!logoutMenu?.contains(e.target) && !logoutToggle?.contains(e.target)) {
      logoutMenu?.classList.remove("show");
    }
  });
});
