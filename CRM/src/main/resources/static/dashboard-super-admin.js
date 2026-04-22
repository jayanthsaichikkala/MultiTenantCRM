// ======================== SIDEBAR & UI ========================
function toggleSub(element) {
    const parent = element.closest('.nav-item');
    parent.classList.toggle('open');
}
function setSubActive(el) {
    document.querySelectorAll('.submenu li').forEach(li => li.classList.remove('active'));
    el.classList.add('active');
}
function setNavActive(el) {
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    el.closest('.nav-item').classList.add('active');
}

// Sidebar collapse
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('sidebarToggle');
const layout = document.getElementById('layout');
if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        layout.classList.toggle('sidebar-collapsed');
        const icon = document.getElementById('toggleIcon');
        if (sidebar.classList.contains('collapsed')) icon.classList.replace('fa-chevron-left', 'fa-chevron-right');
        else icon.classList.replace('fa-chevron-right', 'fa-chevron-left');
    });
}

// Dropdowns: search, apps, messages, notifications, user
function setupDropdown(btnId, dropdownId) {
    const btn = document.getElementById(btnId);
    const dd = document.getElementById(dropdownId);
    if (!btn || !dd) return;
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        document.querySelectorAll('.open').forEach(el => { if (el !== dd) el.classList.remove('open'); });
        dd.classList.toggle('open');
    });
    document.addEventListener('click', (e) => { if (!dd.contains(e.target) && e.target !== btn) dd.classList.remove('open'); });
}
setupDropdown('appsBtn', 'appsDropdown');
setupDropdown('msgBtn', 'msgDropdown');
setupDropdown('notifBtn', 'notifDropdown');
setupDropdown('userChip', 'userDropdown');

// Search dropdown
const searchWrap = document.getElementById('searchBoxWrap');
const searchInput = document.getElementById('searchInput');
const searchDropdown = document.getElementById('searchDropdown');
if (searchInput) {
    searchInput.addEventListener('focus', () => searchDropdown.classList.add('open'));
    document.addEventListener('click', (e) => { if (!searchWrap.contains(e.target)) searchDropdown.classList.remove('open'); });
}

// Fullscreen
const fullBtn = document.getElementById('fullscreenBtn');
if (fullBtn) {
    fullBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) document.documentElement.requestFullscreen();
        else document.exitFullscreen();
    });
}

// ======================== TOAST ========================
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : type === 'warning' ? 'exclamation-triangle' : 'info-circle'}"></i><span>${message}</span>`;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// ======================== MODALS ========================
function openModal(id) { document.getElementById(id).classList.remove('hidden'); }
function closeModal(id) { document.getElementById(id).classList.add('hidden'); }
function openDealModal(company, value, growth, region) {
    document.getElementById('dealCompany').innerText = company;
    document.getElementById('dealValue').innerText = value;
    document.getElementById('dealGrowth').innerText = growth;
    document.getElementById('dealRegion').innerText = region;
    openModal('dealModal');
}
function openSettingsModal() { openModal('settingsModal'); }
function openProfileModal() { openModal('profileModal'); }
function openAddMemberModal() { openModal('addMemberModal'); }
function openDateModal() { openModal('dateModal'); }
function confirmLogout() { openModal('logoutModal'); }
function setDateRange(range) { document.getElementById('dateRange').innerText = range; showToast(`Date range set to ${range}`, 'success'); closeModal('dateModal'); }
function refreshDashboard() { showToast('Dashboard refreshed', 'success'); }
function downloadReport() { showToast('Report downloaded', 'success'); }
function switchTab(btn, period) {
    document.querySelectorAll('#revTabs .tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('revBigNum').innerText = period === 'weekly' ? '$495K' : period === 'monthly' ? '$1.2M' : '$14.5M';
    showToast(`Switched to ${period} view`, 'info');
}

// ======================== CHARTS SIMULATION ========================
function renderRevenueChart() {
    const container = document.getElementById('revenueChart');
    if (!container) return;
    const weeks = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const xLabels = document.getElementById('xAxisLabels');
    xLabels.innerHTML = weeks.map(day => `<span>${day}</span>`).join('');
    container.innerHTML = weeks.map(() => `<div class="bar-col"><div class="bar-pair"><div class="bar bar-primary" style="height:${Math.floor(40 + Math.random() * 50)}px"></div><div class="bar bar-secondary" style="height:${Math.floor(20 + Math.random() * 40)}px"></div></div></div>`).join('');
}
function renderProfitBars() {
    const profitContainer = document.getElementById('profitBars');
    if (!profitContainer) return;
    const values = [45, 68, 52, 78, 63, 88, 72];
    profitContainer.innerHTML = values.map(v => `<div class="pb-col"><div class="pb-bar" style="height:${v}px"></div></div>`).join('');
}
window.addEventListener('DOMContentLoaded', () => {
    renderRevenueChart();
    renderProfitBars();
    // apply donut animation
    document.querySelectorAll('.donut-seg').forEach(seg => seg.classList.add('go'));
    document.querySelectorAll('.ov-seg').forEach(seg => seg.classList.add('go'));
});