/* ══════════════════════════════════════════════════
   CRM Portal – Full Navigation JS
   All nav items wired with demo pages:
   Dashboard · Customers · Leads · Deals ·
   Reports · Products · Settings
   ══════════════════════════════════════════════════ */

(function() {
    'use strict';

    /* ─────────────────────────────────────────────
       DEMO DATA
    ───────────────────────────────────────────── */
    const DATA = {
        customers: [
            { id: 'C-001', name: 'Ravi Kumar', email: 'ravi.kumar@email.com', phone: '+91 98765 43210', company: 'TechCorp India', industry: 'Technology', value: '₹2.4L', status: 'active', joined: '10 Jan 2026' },
            { id: 'C-002', name: 'Priya Sharma', email: 'priya.s@business.in', phone: '+91 91234 56789', company: 'BizSolutions', industry: 'Finance', value: '₹1.8L', status: 'active', joined: '15 Jan 2026' },
            { id: 'C-003', name: 'Arjun Mehta', email: 'arjun.mehta@corp.io', phone: '+91 99887 65432', company: 'Corp IO', industry: 'Retail', value: '₹3.1L', status: 'inactive', joined: '20 Feb 2026' },
            { id: 'C-004', name: 'Sneha Patel', email: 'sneha.p@startup.co', phone: '+91 88776 54321', company: 'StartupCo', industry: 'Healthcare', value: '₹0.9L', status: 'active', joined: '05 Mar 2026' },
            { id: 'C-005', name: 'Kiran Rao', email: 'kiran.rao@ventures.in', phone: '+91 77665 43210', company: 'Rao Ventures', industry: 'Education', value: '₹4.2L', status: 'active', joined: '12 Mar 2026' },
            { id: 'C-006', name: 'Meera Singh', email: 'meera.singh@globalco.com', phone: '+91 66554 32109', company: 'Global Co', industry: 'Technology', value: '₹1.5L', status: 'inactive', joined: '18 Mar 2026' },
            { id: 'C-007', name: 'Anil Desai', email: 'anil.d@enterprise.in', phone: '+91 55443 21098', company: 'Enterprise Ltd', industry: 'Finance', value: '₹5.6L', status: 'active', joined: '01 Apr 2026' },
        ],
        leads: [
            { id: 'L-001', name: 'Ravi Kumar', email: 'ravi.kumar@email.com', source: 'Website', status: 'new', score: 85, date: '17 Apr 2026' },
            { id: 'L-002', name: 'Priya Sharma', email: 'priya.s@business.in', source: 'Referral', status: 'contacted', score: 72, date: '16 Apr 2026' },
            { id: 'L-003', name: 'Arjun Mehta', email: 'arjun.mehta@corp.io', source: 'LinkedIn', status: 'qualified', score: 91, date: '15 Apr 2026' },
            { id: 'L-004', name: 'Sneha Patel', email: 'sneha.p@startup.co', source: 'Email', status: 'lost', score: 34, date: '14 Apr 2026' },
            { id: 'L-005', name: 'Kiran Rao', email: 'kiran.rao@ventures.in', source: 'Event', status: 'won', score: 96, date: '13 Apr 2026' },
            { id: 'L-006', name: 'Meera Singh', email: 'meera.singh@globalco.com', source: 'Website', status: 'new', score: 60, date: '12 Apr 2026' },
            { id: 'L-007', name: 'Anil Desai', email: 'anil.d@enterprise.in', source: 'LinkedIn', status: 'contacted', score: 78, date: '11 Apr 2026' },
            { id: 'L-008', name: 'Divya Nair', email: 'divya.nair@softco.io', source: 'Referral', status: 'qualified', score: 88, date: '10 Apr 2026' },
        ],
        deals: [
            { id: 'D-001', title: 'Enterprise License Q1', contact: 'Anil Desai', value: '₹5,60,000', stage: 'closed-won', close: '30 Mar 2026', prob: 100 },
            { id: 'D-002', title: 'SaaS Annual Plan', contact: 'Kiran Rao', value: '₹4,20,000', stage: 'negotiation', close: '25 Apr 2026', prob: 70 },
            { id: 'D-003', title: 'Consulting Package', contact: 'Priya Sharma', value: '₹1,80,000', stage: 'proposal', close: '10 May 2026', prob: 45 },
            { id: 'D-004', title: 'Starter Bundle', contact: 'Ravi Kumar', value: '₹2,40,000', stage: 'prospect', close: '20 May 2026', prob: 20 },
            { id: 'D-005', title: 'Premium Support Plan', contact: 'Divya Nair', value: '₹88,000', stage: 'negotiation', close: '28 Apr 2026', prob: 65 },
            { id: 'D-006', title: 'Training Workshop', contact: 'Meera Singh', value: '₹1,50,000', stage: 'closed-lost', close: '05 Apr 2026', prob: 0 },
            { id: 'D-007', title: 'Data Migration Service', contact: 'Arjun Mehta', value: '₹3,10,000', stage: 'proposal', close: '15 May 2026', prob: 50 },
        ],
        products: [
            { id: 'P-001', name: 'CRM Pro', category: 'Software', price: '₹4,999/mo', stock: '-', status: 'active', sales: 124 },
            { id: 'P-002', name: 'CRM Enterprise', category: 'Software', price: '₹12,999/mo', stock: '-', status: 'active', sales: 38 },
            { id: 'P-003', name: 'Data Migration', category: 'Service', price: '₹50,000', stock: '-', status: 'active', sales: 17 },
            { id: 'P-004', name: 'Training Pack', category: 'Service', price: '₹15,000', stock: '-', status: 'active', sales: 52 },
            { id: 'P-005', name: 'API Addon', category: 'Software', price: '₹1,999/mo', stock: '-', status: 'inactive', sales: 9 },
            { id: 'P-006', name: 'Premium Support', category: 'Support', price: '₹8,000/mo', stock: '-', status: 'active', sales: 43 },
        ],
    };

    /* ─────────────────────────────────────────────
       MODAL ENGINE
    ───────────────────────────────────────────── */
    function createModal(id, title, bodyHTML, footerHTML) {
        if (document.getElementById(id)) return;
        const overlay = document.createElement('div');
        overlay.id = id;
        overlay.className = 'crm-overlay';
        overlay.innerHTML = `
      <div class="crm-modal" role="dialog" aria-modal="true">
        <div class="crm-modal-header">
          <h3>${title}</h3>
          <button class="crm-modal-close" data-close="${id}" aria-label="Close">
            <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
        <div class="crm-modal-body">${bodyHTML}</div>
        ${footerHTML ? `<div class="crm-modal-footer">${footerHTML}</div>` : ''}
      </div>`;
        document.body.appendChild(overlay);
        overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(id); });
        overlay.querySelectorAll('[data-close]').forEach(b => b.addEventListener('click', () => closeModal(id)));
        document.addEventListener('keydown', function esc(e) {
            if (e.key === 'Escape') { closeModal(id); document.removeEventListener('keydown', esc); }
        });
        requestAnimationFrame(() => overlay.classList.add('crm-overlay--open'));
    }

    function closeModal(id) {
        const el = document.getElementById(id);
        if (!el) return;
        el.classList.remove('crm-overlay--open');
        el.addEventListener('transitionend', () => el.remove(), { once: true });
    }

    /* ─────────────────────────────────────────────
       TOAST
    ───────────────────────────────────────────── */
    let toastContainer;
    function toast(msg, type = 'success') {
        if (!toastContainer) {
            toastContainer = document.createElement('div');
            toastContainer.className = 'crm-toast-container';
            document.body.appendChild(toastContainer);
        }
        const icons = {
            success: '<svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>',
            error: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>',
            info: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
        };
        const t = document.createElement('div');
        t.className = `crm-toast crm-toast--${type}`;
        t.innerHTML = `<span class="crm-toast-icon">${icons[type] || icons.info}</span><span>${msg}</span>`;
        toastContainer.appendChild(t);
        requestAnimationFrame(() => t.classList.add('crm-toast--show'));
        setTimeout(() => {
            t.classList.remove('crm-toast--show');
            t.addEventListener('transitionend', () => t.remove(), { once: true });
        }, 3200);
    }

    /* ─────────────────────────────────────────────
       FORM HELPERS
    ───────────────────────────────────────────── */
    function ff(label, id, type = 'text', ph = '', req = true) {
        return `<div class="crm-field"><label for="${id}">${label}${req ? ' <span class="req">*</span>' : ''}</label><input type="${type}" id="${id}" name="${id}" placeholder="${ph}" ${req ? 'required' : ''}/></div>`;
    }
    function fs(label, id, opts, req = true) {
        return `<div class="crm-field"><label for="${id}">${label}${req ? ' <span class="req">*</span>' : ''}</label><select id="${id}" name="${id}" ${req ? 'required' : ''}><option value="">— Select —</option>${opts.map(o => `<option value="${o.v}">${o.l}</option>`).join('')}</select></div>`;
    }
    function ft(label, id, ph = '') {
        return `<div class="crm-field"><label for="${id}">${label}</label><textarea id="${id}" name="${id}" rows="3" placeholder="${ph}"></textarea></div>`;
    }
    function c2(...f) { return `<div class="crm-col2">${f.join('')}</div>`; }

    /* ─────────────────────────────────────────────
       AVATAR COLORS
    ───────────────────────────────────────────── */
    const COLORS = ['teal', 'orange', 'purple', 'red', 'blue'];
    function avatarColor(i) { return COLORS[i % COLORS.length]; }

    /* ─────────────────────────────────────────────
       STATUS BADGE HTML
    ───────────────────────────────────────────── */
    function statusBadge(s) {
        const map = {
            active: 'status won',
            inactive: 'status lost',
            new: 'status new',
            contacted: 'status contacted',
            qualified: 'status qualified',
            lost: 'status lost',
            won: 'status won',
            prospect: 'status new',
            proposal: 'status contacted',
            negotiation: 'status qualified',
            'closed-won': 'status won',
            'closed-lost': 'status lost',
        };
        const label = { 'closed-won': 'Closed Won', 'closed-lost': 'Closed Lost' }[s] || (s.charAt(0).toUpperCase() + s.slice(1));
        return `<span class="${map[s] || 'status new'}">${label}</span>`;
    }

    /* ─────────────────────────────────────────────
       SCORE BAR
    ───────────────────────────────────────────── */
    function scoreBar(n) {
        const c = n >= 80 ? '#19b88a' : n >= 50 ? '#f5a623' : '#e8526a';
        return `<div style="display:flex;align-items:center;gap:8px">
      <div style="flex:1;height:6px;background:#e8eaf2;border-radius:10px;overflow:hidden">
        <div style="width:${n}%;height:100%;background:${c};border-radius:10px"></div>
      </div>
      <span style="font-size:11px;font-weight:700;color:${c};width:28px">${n}</span>
    </div>`;
    }

    /* ─────────────────────────────────────────────
       PAGE RENDERERS
    ───────────────────────────────────────────── */

    /* ── DASHBOARD (original content) ─────────── */
    function pageDashboard() {
        return `
      <div class="page-header" style="animation:fadeUp .35s .02s cubic-bezier(.4,0,.2,1) both">
        <div><h1 class="page-title">Dashboard</h1><p class="page-sub">Here's what's happening with your CRM today.</p></div>
        <button class="btn-primary" id="hdr-add-lead">
          <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Add New Lead
        </button>
      </div>

      <section class="kpi-grid">
        <div class="kpi-card" style="--accent:#1aab8a">
          <div class="kpi-top">
            <div class="kpi-icon" style="background:rgba(26,171,138,.12);color:#1aab8a">
              <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            </div>
            <span class="kpi-trend up">▲ 8.2%</span>
          </div>
          <p class="kpi-value">2,847</p>
          <p class="kpi-label">Total Customers</p>
          <div class="kpi-bar"><div style="width:72%"></div></div>
        </div>
        <div class="kpi-card" style="--accent:#f5a623">
          <div class="kpi-top">
            <div class="kpi-icon" style="background:rgba(245,166,35,.12);color:#f5a623">
              <svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            </div>
            <span class="kpi-trend up">▲ 3.5%</span>
          </div>
          <p class="kpi-value">143</p>
          <p class="kpi-label">Active Leads</p>
          <div class="kpi-bar"><div style="width:55%"></div></div>
        </div>
        <div class="kpi-card" style="--accent:#e8526a">
          <div class="kpi-top">
            <div class="kpi-icon" style="background:rgba(232,82,106,.12);color:#e8526a">
              <svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <span class="kpi-trend up">▲ 12.1%</span>
          </div>
          <p class="kpi-value">₹48.6L</p>
          <p class="kpi-label">Revenue (Month)</p>
          <div class="kpi-bar"><div style="width:83%"></div></div>
        </div>
        <div class="kpi-card" style="--accent:#6c63ff">
          <div class="kpi-top">
            <div class="kpi-icon" style="background:rgba(108,99,255,.12);color:#6c63ff">
              <svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
            </div>
            <span class="kpi-trend down">▼ 1.4%</span>
          </div>
          <p class="kpi-value">38</p>
          <p class="kpi-label">Deals Closed</p>
          <div class="kpi-bar"><div style="width:40%"></div></div>
        </div>
      </section>

      <div class="mid-row">
        <section class="table-card">
          <div class="card-header"><h2>Recent Leads</h2><a href="#" class="link-more">View all →</a></div>
          <div class="table-wrap">
            <table>
              <thead><tr><th>#</th><th>Name</th><th>Email</th><th>Source</th><th>Status</th><th>Date</th><th>Action</th></tr></thead>
              <tbody>
                ${DATA.leads.slice(0, 5).map((l, i) => `
                <tr>
                  <td class="row-id">${String(i + 1).padStart(3, '0')}</td>
                  <td class="row-name"><div class="mini-avatar ${avatarColor(i)}">${l.name[0]}</div>${l.name}</td>
                  <td>${l.email}</td>
                  <td>${l.source}</td>
                  <td>${statusBadge(l.status)}</td>
                  <td>${l.date}</td>
                  <td><button class="action-btn view-lead-btn" data-id="${l.id}">View</button></td>
                </tr>`).join('')}
              </tbody>
            </table>
          </div>
        </section>
        <div class="right-col">
          <section class="quick-card">
            <div class="card-header"><h2>Quick Actions</h2></div>
            <div class="quick-actions">
              ${quickBtns()}
            </div>
          </section>
          <section class="activity-card">
            <div class="card-header"><h2>Recent Activity</h2><a href="#" class="link-more">See all →</a></div>
            <ul class="activity-list">
              <li><div class="act-dot teal"></div><div class="act-body"><p><strong>Ravi Kumar</strong> added as new lead</p><span>2 minutes ago</span></div></li>
              <li><div class="act-dot orange"></div><div class="act-body"><p>Deal <strong>#D-0042</strong> marked as Won</p><span>18 minutes ago</span></div></li>
              <li><div class="act-dot purple"></div><div class="act-body"><p>Meeting scheduled with <strong>Arjun Mehta</strong></p><span>1 hour ago</span></div></li>
              <li><div class="act-dot red"></div><div class="act-body"><p>Email sent to <strong>Sneha Patel</strong></p><span>3 hours ago</span></div></li>
              <li><div class="act-dot teal"></div><div class="act-body"><p>Report <strong>Q1-2026</strong> generated</p><span>Yesterday</span></div></li>
            </ul>
          </section>
        </div>
      </div>`;
    }

    function quickBtns() {
        const btns = [
            { icon: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/>', label: 'Add Customer', id: 'qa-cust' },
            { icon: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>', label: 'New Lead', id: 'qa-lead' },
            { icon: '<path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>', label: 'Create Deal', id: 'qa-deal' },
            { icon: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>', label: 'Generate Report', id: 'qa-report' },
            { icon: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>', label: 'Schedule Meeting', id: 'qa-meet' },
            { icon: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>', label: 'Send Email', id: 'qa-email' },
        ];
        return btns.map(b => `
      <button class="quick-btn" id="${b.id}">
        <svg viewBox="0 0 24 24">${b.icon}</svg>
        ${b.label}
      </button>`).join('');
    }

    /* ── CUSTOMERS PAGE ────────────────────────── */
    function pageCustomers() {
        const rows = DATA.customers.map((c, i) => `
      <tr>
        <td class="row-id">${c.id}</td>
        <td class="row-name"><div class="mini-avatar ${avatarColor(i)}">${c.name[0]}</div>${c.name}</td>
        <td>${c.email}</td>
        <td>${c.phone}</td>
        <td>${c.company}</td>
        <td>${c.industry}</td>
        <td style="font-weight:700;color:#1b1e2e">${c.value}</td>
        <td>${statusBadge(c.status)}</td>
        <td>${c.joined}</td>
        <td><button class="action-btn view-cust-btn" data-idx="${i}">View</button></td>
      </tr>`).join('');

        return `
      <div class="page-header">
        <div><h1 class="page-title">Customers</h1><p class="page-sub">Manage all your customer relationships in one place.</p></div>
        <button class="btn-primary" id="add-cust-btn">
          <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Add Customer
        </button>
      </div>

      <section class="kpi-grid" style="grid-template-columns:repeat(3,1fr)">
        <div class="kpi-card" style="--accent:#1aab8a">
          <div class="kpi-top"><div class="kpi-icon" style="background:rgba(26,171,138,.12);color:#1aab8a"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div><span class="kpi-trend up">▲ 8.2%</span></div>
          <p class="kpi-value">2,847</p><p class="kpi-label">Total Customers</p><div class="kpi-bar"><div style="width:72%"></div></div>
        </div>
        <div class="kpi-card" style="--accent:#5b6ef5">
          <div class="kpi-top"><div class="kpi-icon" style="background:rgba(91,110,245,.12);color:#5b6ef5"><svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><span class="kpi-trend up">▲ 5.1%</span></div>
          <p class="kpi-value">2,304</p><p class="kpi-label">Active Customers</p><div class="kpi-bar"><div style="width:81%"></div></div>
        </div>
        <div class="kpi-card" style="--accent:#f5a623">
          <div class="kpi-top"><div class="kpi-icon" style="background:rgba(245,166,35,.12);color:#f5a623"><svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div><span class="kpi-trend up">▲ 12.1%</span></div>
          <p class="kpi-value">₹48.6L</p><p class="kpi-label">Total Revenue</p><div class="kpi-bar"><div style="width:83%"></div></div>
        </div>
      </section>

      <section class="table-card">
        <div class="card-header">
          <h2>All Customers</h2>
          <div style="display:flex;gap:10px;align-items:center">
            <div class="search-box" style="width:220px">
              <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input type="text" placeholder="Search customers…" id="cust-search"/>
            </div>
          </div>
        </div>
        <div class="table-wrap">
          <table id="cust-table">
            <thead><tr><th>ID</th><th>Name</th><th>Email</th><th>Phone</th><th>Company</th><th>Industry</th><th>Value</th><th>Status</th><th>Joined</th><th>Action</th></tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </section>`;
    }

    /* ── LEADS PAGE ────────────────────────────── */
    function pageLeads() {
        const rows = DATA.leads.map((l, i) => `
      <tr>
        <td class="row-id">${l.id}</td>
        <td class="row-name"><div class="mini-avatar ${avatarColor(i)}">${l.name[0]}</div>${l.name}</td>
        <td>${l.email}</td>
        <td>${l.source}</td>
        <td>${statusBadge(l.status)}</td>
        <td style="min-width:120px">${scoreBar(l.score)}</td>
        <td>${l.date}</td>
        <td><button class="action-btn view-lead-btn" data-id="${l.id}">View</button></td>
      </tr>`).join('');

        const pipeline = [
            { label: 'New', count: 42, pct: 30, color: '#5b6ef5' },
            { label: 'Contacted', count: 31, pct: 22, color: '#f5a623' },
            { label: 'Qualified', count: 28, pct: 20, color: '#19b88a' },
            { label: 'Won', count: 24, pct: 17, color: '#0d9b73' },
            { label: 'Lost', count: 18, pct: 13, color: '#e8526a' },
        ];

        return `
      <div class="page-header">
        <div><h1 class="page-title">Leads</h1><p class="page-sub">Track and convert your leads into customers.</p></div>
        <button class="btn-primary" id="add-lead-btn">
          <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Add New Lead
        </button>
      </div>

      <section class="kpi-grid">
        <div class="kpi-card" style="--accent:#5b6ef5"><div class="kpi-top"><div class="kpi-icon" style="background:rgba(91,110,245,.12);color:#5b6ef5"><svg viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div><span class="kpi-trend up">▲ 3.5%</span></div><p class="kpi-value">143</p><p class="kpi-label">Active Leads</p><div class="kpi-bar"><div style="width:55%"></div></div></div>
        <div class="kpi-card" style="--accent:#19b88a"><div class="kpi-top"><div class="kpi-icon" style="background:rgba(26,184,138,.12);color:#19b88a"><svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><span class="kpi-trend up">▲ 5.2%</span></div><p class="kpi-value">38</p><p class="kpi-label">Converted</p><div class="kpi-bar"><div style="width:38%"></div></div></div>
        <div class="kpi-card" style="--accent:#f5a623"><div class="kpi-top"><div class="kpi-icon" style="background:rgba(245,166,35,.12);color:#f5a623"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div><span class="kpi-trend down">▼ 0.8%</span></div><p class="kpi-value">4.2d</p><p class="kpi-label">Avg. Response</p><div class="kpi-bar"><div style="width:60%"></div></div></div>
        <div class="kpi-card" style="--accent:#8b6cf6"><div class="kpi-top"><div class="kpi-icon" style="background:rgba(139,108,246,.12);color:#8b6cf6"><svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg></div><span class="kpi-trend up">▲ 2.1%</span></div><p class="kpi-value">26.6%</p><p class="kpi-label">Conversion Rate</p><div class="kpi-bar"><div style="width:27%"></div></div></div>
      </section>

      <div class="mid-row">
        <section class="table-card">
          <div class="card-header">
            <h2>All Leads</h2>
            <div class="search-box" style="width:200px">
              <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
              <input type="text" placeholder="Search leads…" id="lead-search"/>
            </div>
          </div>
          <div class="table-wrap">
            <table id="lead-table">
              <thead><tr><th>ID</th><th>Name</th><th>Email</th><th>Source</th><th>Status</th><th>Score</th><th>Date</th><th>Action</th></tr></thead>
              <tbody>${rows}</tbody>
            </table>
          </div>
        </section>
        <div class="right-col">
          <section class="quick-card">
            <div class="card-header"><h2>Pipeline</h2></div>
            <div style="display:flex;flex-direction:column;gap:14px;padding-top:4px">
              ${pipeline.map(p => `
                <div>
                  <div style="display:flex;justify-content:space-between;margin-bottom:5px">
                    <span style="font-size:12.5px;font-weight:600;color:#6b7280">${p.label}</span>
                    <span style="font-size:12.5px;font-weight:700;color:#1b1e2e">${p.count}</span>
                  </div>
                  <div style="height:8px;background:#e8eaf2;border-radius:10px;overflow:hidden">
                    <div style="width:${p.pct}%;height:100%;background:${p.color};border-radius:10px;transition:width .6s ease"></div>
                  </div>
                </div>`).join('')}
            </div>
          </section>
          <section class="activity-card">
            <div class="card-header"><h2>Top Sources</h2></div>
            <div style="display:flex;flex-direction:column;gap:10px;padding-top:4px">
              ${[['Website', '38%', '#5b6ef5'], ['LinkedIn', '27%', '#19b88a'], ['Referral', '20%', '#f5a623'], ['Email', '10%', '#8b6cf6'], ['Event', '5%', '#e8526a']].map(([s, p, c]) => `
              <div style="display:flex;align-items:center;gap:10px">
                <div style="width:9px;height:9px;border-radius:50%;background:${c};flex-shrink:0"></div>
                <span style="flex:1;font-size:12.5px;color:#1b1e2e;font-weight:600">${s}</span>
                <span style="font-size:12px;font-weight:700;color:${c}">${p}</span>
              </div>`).join('')}
            </div>
          </section>
        </div>
      </div>`;
    }

    /* ── DEALS PAGE ────────────────────────────── */
    function pageDeals() {
        const stageOrder = ['prospect', 'proposal', 'negotiation', 'closed-won', 'closed-lost'];
        const stageLabel = { prospect: 'Prospect', proposal: 'Proposal Sent', negotiation: 'Negotiation', 'closed-won': 'Closed Won', 'closed-lost': 'Closed Lost' };

        const rows = DATA.deals.map((d, i) => `
      <tr>
        <td class="row-id">${d.id}</td>
        <td style="font-weight:700;color:#1b1e2e">${d.title}</td>
        <td class="row-name"><div class="mini-avatar ${avatarColor(i)}" style="width:26px;height:26px;font-size:10px">${d.contact[0]}</div>${d.contact}</td>
        <td style="font-weight:700;color:#1b1e2e">${d.value}</td>
        <td>${statusBadge(d.stage)}</td>
        <td>${scoreBar(d.prob)}</td>
        <td>${d.close}</td>
        <td><button class="action-btn view-deal-btn" data-idx="${i}">View</button></td>
      </tr>`).join('');

        const totalPipeline = '₹18,48,000';
        const won = DATA.deals.filter(d => d.stage === 'closed-won').length;
        const lost = DATA.deals.filter(d => d.stage === 'closed-lost').length;

        return `
      <div class="page-header">
        <div><h1 class="page-title">Deals</h1><p class="page-sub">Monitor your sales pipeline and close more deals.</p></div>
        <button class="btn-primary" id="add-deal-btn">
          <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Create Deal
        </button>
      </div>

      <section class="kpi-grid">
        <div class="kpi-card" style="--accent:#5b6ef5"><div class="kpi-top"><div class="kpi-icon" style="background:rgba(91,110,245,.12);color:#5b6ef5"><svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg></div><span class="kpi-trend up">▲ 4.0%</span></div><p class="kpi-value">7</p><p class="kpi-label">Total Deals</p><div class="kpi-bar"><div style="width:70%"></div></div></div>
        <div class="kpi-card" style="--accent:#19b88a"><div class="kpi-top"><div class="kpi-icon" style="background:rgba(26,184,138,.12);color:#19b88a"><svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><span class="kpi-trend up">▲ 2.5%</span></div><p class="kpi-value">${won}</p><p class="kpi-label">Deals Won</p><div class="kpi-bar"><div style="width:${won * 14}%"></div></div></div>
        <div class="kpi-card" style="--accent:#e8526a"><div class="kpi-top"><div class="kpi-icon" style="background:rgba(232,82,106,.12);color:#e8526a"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg></div><span class="kpi-trend down">▼ 1.0%</span></div><p class="kpi-value">${lost}</p><p class="kpi-label">Deals Lost</p><div class="kpi-bar"><div style="width:${lost * 14}%"></div></div></div>
        <div class="kpi-card" style="--accent:#f5a623"><div class="kpi-top"><div class="kpi-icon" style="background:rgba(245,166,35,.12);color:#f5a623"><svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div><span class="kpi-trend up">▲ 9.2%</span></div><p class="kpi-value">${totalPipeline}</p><p class="kpi-label">Pipeline Value</p><div class="kpi-bar"><div style="width:75%"></div></div></div>
      </section>

      <section class="table-card">
        <div class="card-header"><h2>All Deals</h2><a href="#" class="link-more">Export →</a></div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>ID</th><th>Title</th><th>Contact</th><th>Value</th><th>Stage</th><th>Probability</th><th>Close Date</th><th>Action</th></tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </section>`;
    }

    /* ── REPORTS PAGE ──────────────────────────── */
    function pageReports() {
        const months = ['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'];
        const revenue = [32, 38, 41, 36, 44, 48];
        const maxRev = Math.max(...revenue);

        return `
      <div class="page-header">
        <div><h1 class="page-title">Reports</h1><p class="page-sub">Insights and analytics for your CRM data.</p></div>
        <button class="btn-primary" id="gen-report-btn">
          <svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
          Generate Report
        </button>
      </div>

      <section class="kpi-grid">
        <div class="kpi-card" style="--accent:#5b6ef5"><div class="kpi-top"><div class="kpi-icon" style="background:rgba(91,110,245,.12);color:#5b6ef5"><svg viewBox="0 0 24 24"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg></div><span class="kpi-trend up">▲ 12.1%</span></div><p class="kpi-value">₹48.6L</p><p class="kpi-label">This Month</p><div class="kpi-bar"><div style="width:83%"></div></div></div>
        <div class="kpi-card" style="--accent:#19b88a"><div class="kpi-top"><div class="kpi-icon" style="background:rgba(26,184,138,.12);color:#19b88a"><svg viewBox="0 0 24 24"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg></div><span class="kpi-trend up">▲ 8.2%</span></div><p class="kpi-value">₹1.84Cr</p><p class="kpi-label">YTD Revenue</p><div class="kpi-bar"><div style="width:61%"></div></div></div>
        <div class="kpi-card" style="--accent:#f5a623"><div class="kpi-top"><div class="kpi-icon" style="background:rgba(245,166,35,.12);color:#f5a623"><svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div><span class="kpi-trend up">▲ 3.5%</span></div><p class="kpi-value">2,847</p><p class="kpi-label">Total Customers</p><div class="kpi-bar"><div style="width:72%"></div></div></div>
        <div class="kpi-card" style="--accent:#8b6cf6"><div class="kpi-top"><div class="kpi-icon" style="background:rgba(139,108,246,.12);color:#8b6cf6"><svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg></div><span class="kpi-trend up">▲ 6.4%</span></div><p class="kpi-value">26.6%</p><p class="kpi-label">Win Rate</p><div class="kpi-bar"><div style="width:27%"></div></div></div>
      </section>

      <div class="mid-row">
        <section class="table-card">
          <div class="card-header"><h2>Revenue Trend (Last 6 Months)</h2></div>
          <div style="padding:10px 0 20px">
            <div style="display:flex;align-items:flex-end;gap:16px;height:180px;padding:0 10px">
              ${months.map((m, i) => `
              <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:8px">
                <span style="font-size:11px;font-weight:700;color:#1b1e2e">₹${revenue[i]}L</span>
                <div style="width:100%;height:${Math.round((revenue[i] / maxRev) * 140)}px;background:linear-gradient(180deg,#5b6ef5,#8b6cf6);border-radius:8px 8px 4px 4px;transition:height .6s ease;position:relative;cursor:pointer"
                     title="${m}: ₹${revenue[i]}L"
                     onmouseover="this.style.opacity='.8'" onmouseout="this.style.opacity='1'"></div>
                <span style="font-size:11.5px;font-weight:600;color:#a3aab6">${m}</span>
              </div>`).join('')}
            </div>
          </div>
          <div class="card-header" style="margin-top:16px"><h2>Saved Reports</h2><a href="#" class="link-more">View all →</a></div>
          <div class="table-wrap">
            <table>
              <thead><tr><th>Report</th><th>Type</th><th>Period</th><th>Created</th><th>Action</th></tr></thead>
              <tbody>
                ${[
                ['Q1-2026 Summary', 'Revenue', 'Jan – Mar 2026', '01 Apr 2026'],
                ['Lead Pipeline Q1', 'Leads', 'Jan – Mar 2026', '01 Apr 2026'],
                ['Customer Growth', 'Customers', 'FY 2025–26', '15 Mar 2026'],
                ['Deals Pipeline', 'Deals', 'Mar 2026', '31 Mar 2026'],
            ].map(([n, t, p, d]) => `<tr>
                  <td style="font-weight:700;color:#1b1e2e">${n}</td>
                  <td><span class="status new">${t}</span></td>
                  <td style="color:#6b7280">${p}</td>
                  <td style="color:#6b7280">${d}</td>
                  <td><button class="action-btn" onclick="toast('Downloading…','info')">Download</button></td>
                </tr>`).join('')}
              </tbody>
            </table>
          </div>
        </section>
        <div class="right-col">
          <section class="quick-card">
            <div class="card-header"><h2>Quick Reports</h2></div>
            <div class="quick-actions">
              ${[['Lead Summary', '#f5a623'], ['Revenue Report', '#19b88a'], ['Customer Report', '#5b6ef5'], ['Deals Pipeline', '#8b6cf6'], ['Activity Log', '#3b8adc']].map(([l, c]) => `
              <button class="quick-btn" onclick="toast('Generating ${l}…','info')" style="border-left:3px solid ${c}">
                <svg viewBox="0 0 24 24" style="color:${c}"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
                ${l}
              </button>`).join('')}
            </div>
          </section>
          <section class="activity-card">
            <div class="card-header"><h2>By Industry</h2></div>
            <div style="display:flex;flex-direction:column;gap:12px;padding-top:4px">
              ${[['Technology', '35%', '#5b6ef5'], ['Finance', '25%', '#19b88a'], ['Healthcare', '18%', '#f5a623'], ['Retail', '12%', '#8b6cf6'], ['Education', '10%', '#e8526a']].map(([s, p, c]) => `
              <div>
                <div style="display:flex;justify-content:space-between;margin-bottom:4px">
                  <span style="font-size:12px;font-weight:600;color:#6b7280">${s}</span>
                  <span style="font-size:12px;font-weight:700;color:${c}">${p}</span>
                </div>
                <div style="height:7px;background:#e8eaf2;border-radius:10px;overflow:hidden">
                  <div style="width:${p};height:100%;background:${c};border-radius:10px"></div>
                </div>
              </div>`).join('')}
            </div>
          </section>
        </div>
      </div>`;
    }

    /* ── PRODUCTS PAGE ─────────────────────────── */
    function pageProducts() {
        const rows = DATA.products.map((p, i) => `
      <tr>
        <td class="row-id">${p.id}</td>
        <td class="row-name"><div class="mini-avatar ${avatarColor(i)}" style="border-radius:8px">${p.name[0]}</div>${p.name}</td>
        <td><span class="status ${p.category === 'Software' ? 'new' : p.category === 'Service' ? 'qualified' : 'contacted'}">${p.category}</span></td>
        <td style="font-weight:700;color:#1b1e2e">${p.price}</td>
        <td>${statusBadge(p.status)}</td>
        <td style="font-weight:700;color:#5b6ef5">${p.sales} units</td>
        <td><button class="action-btn" onclick="toast('Editing ${p.name}…','info')">Edit</button></td>
      </tr>`).join('');

        return `
      <div class="page-header">
        <div><h1 class="page-title">Products</h1><p class="page-sub">Manage your product and service catalogue.</p></div>
        <button class="btn-primary" id="add-prod-btn">
          <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Add Product
        </button>
      </div>

      <section class="kpi-grid" style="grid-template-columns:repeat(3,1fr)">
        <div class="kpi-card" style="--accent:#5b6ef5"><div class="kpi-top"><div class="kpi-icon" style="background:rgba(91,110,245,.12);color:#5b6ef5"><svg viewBox="0 0 24 24"><path d="M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></div><span class="kpi-trend up">▲ 2.0%</span></div><p class="kpi-value">6</p><p class="kpi-label">Total Products</p><div class="kpi-bar"><div style="width:60%"></div></div></div>
        <div class="kpi-card" style="--accent:#19b88a"><div class="kpi-top"><div class="kpi-icon" style="background:rgba(26,184,138,.12);color:#19b88a"><svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><span class="kpi-trend up">▲ 1.0%</span></div><p class="kpi-value">5</p><p class="kpi-label">Active</p><div class="kpi-bar"><div style="width:83%"></div></div></div>
        <div class="kpi-card" style="--accent:#f5a623"><div class="kpi-top"><div class="kpi-icon" style="background:rgba(245,166,35,.12);color:#f5a623"><svg viewBox="0 0 24 24"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div><span class="kpi-trend up">▲ 7.3%</span></div><p class="kpi-value">283</p><p class="kpi-label">Total Sales</p><div class="kpi-bar"><div style="width:71%"></div></div></div>
      </section>

      <section class="table-card">
        <div class="card-header"><h2>Product Catalogue</h2><a href="#" class="link-more">Export →</a></div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>ID</th><th>Name</th><th>Category</th><th>Price</th><th>Status</th><th>Sales</th><th>Action</th></tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>
      </section>`;
    }

    /* ── SETTINGS PAGE ─────────────────────────── */
    function pageSettings() {
        return `
      <div class="page-header">
        <div><h1 class="page-title">Settings</h1><p class="page-sub">Manage your account and CRM preferences.</p></div>
        <button class="btn-primary" id="save-settings-btn">
          <svg viewBox="0 0 24 24"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
          Save Changes
        </button>
      </div>

      <div style="display:grid;grid-template-columns:220px 1fr;gap:20px;align-items:start">

        <!-- Settings sidebar -->
        <nav style="background:#fff;border:1px solid #e8eaf2;border-radius:16px;padding:10px;box-shadow:0 2px 8px rgba(27,30,46,.07)">
          ${[
                ['Profile', 'M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', 'active'],
                ['Security', 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', ''],
                ['Notifications', 'M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0', ''],
                ['Integrations', 'M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16', ''],
                ['Team', 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75', ''],
                ['Billing', 'M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM1 9h22', ''],
            ].map(([l, icon, cls]) => `
          <a href="#" class="settings-nav-item ${cls}" onclick="event.preventDefault();document.querySelectorAll('.settings-nav-item').forEach(x=>x.classList.remove('active'));this.classList.add('active')">
            <svg viewBox="0 0 24 24" style="width:15px;height:15px;stroke:currentColor;fill:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round"><path d="${icon}"/></svg>
            ${l}
          </a>`).join('')}
        </nav>

        <!-- Settings content -->
        <div style="display:flex;flex-direction:column;gap:18px">

          <!-- Profile Card -->
          <section class="table-card" style="padding:24px">
            <div class="card-header"><h2>Profile Information</h2></div>
            <div style="display:flex;align-items:center;gap:20px;margin-bottom:24px;padding:16px;background:#f8f9ff;border-radius:14px">
              <div style="width:64px;height:64px;border-radius:50%;background:linear-gradient(135deg,#5b6ef5,#8b6cf6);display:flex;align-items:center;justify-content:center;color:#fff;font-size:24px;font-weight:800;box-shadow:0 4px 12px rgba(91,110,245,.3)">A</div>
              <div>
                <p style="font-size:15px;font-weight:800;color:#1b1e2e">Admin User</p>
                <p style="font-size:12.5px;color:#6b7280;margin-top:2px">Super Admin · admin@crmportal.in</p>
              </div>
              <button class="action-btn" style="margin-left:auto" onclick="toast('Photo upload coming soon!','info')">Change Photo</button>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px">
              <div class="crm-field"><label for="s-fname">First Name</label><input type="text" id="s-fname" value="Admin" /></div>
              <div class="crm-field"><label for="s-lname">Last Name</label><input type="text" id="s-lname" value="User" /></div>
              <div class="crm-field"><label for="s-email">Email</label><input type="email" id="s-email" value="admin@crmportal.in" /></div>
              <div class="crm-field"><label for="s-phone">Phone</label><input type="tel" id="s-phone" value="+91 98765 43210" /></div>
              <div class="crm-field" style="grid-column:1/-1"><label for="s-company">Company</label><input type="text" id="s-company" value="CRM Portal Pvt. Ltd." /></div>
            </div>
          </section>

          <!-- Preferences -->
          <section class="table-card" style="padding:24px">
            <div class="card-header"><h2>Preferences</h2></div>
            <div style="display:flex;flex-direction:column;gap:16px">
              ${[
                ['Email Notifications', 'Receive email alerts for new leads and deals', 'checked'],
                ['Desktop Push Notifications', 'Show browser notifications for activity updates', 'checked'],
                ['Weekly Summary Email', 'Get a weekly digest of your CRM activity', ''],
                ['Two-Factor Authentication', 'Add an extra layer of security to your account', ''],
            ].map(([t, d, c]) => `
              <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px;background:#f8f9ff;border-radius:12px">
                <div>
                  <p style="font-size:13.5px;font-weight:700;color:#1b1e2e">${t}</p>
                  <p style="font-size:12px;color:#a3aab6;margin-top:3px">${d}</p>
                </div>
                <label style="position:relative;width:42px;height:24px;cursor:pointer;flex-shrink:0">
                  <input type="checkbox" ${c} style="opacity:0;width:0;height:0" onchange="toast(this.checked?'Setting enabled':'Setting disabled','success')"/>
                  <span class="crm-toggle"></span>
                </label>
              </div>`).join('')}
            </div>
          </section>

          <!-- Danger Zone -->
          <section class="table-card" style="padding:24px;border-color:#feeaed">
            <div class="card-header"><h2 style="color:#e8526a">Danger Zone</h2></div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:14px 16px;background:#feeaed;border-radius:12px">
              <div>
                <p style="font-size:13.5px;font-weight:700;color:#e8526a">Delete Account</p>
                <p style="font-size:12px;color:#c53050;margin-top:3px">Permanently delete your account and all data</p>
              </div>
              <button style="background:#e8526a;color:#fff;font-size:12px;font-weight:700;padding:8px 16px;border-radius:8px;cursor:pointer;font-family:inherit" onclick="toast('This action is disabled in demo mode.','error')">Delete</button>
            </div>
          </section>

        </div>
      </div>`;
    }

    /* ─────────────────────────────────────────────
       PAGE MAP
    ───────────────────────────────────────────── */
    const PAGES = {
        dashboard: pageDashboard,
        customers: pageCustomers,
        leads: pageLeads,
        deals: pageDeals,
        reports: pageReports,
        products: pageProducts,
        settings: pageSettings,
    };

    /* ─────────────────────────────────────────────
       ROUTER — swap <main.content> HTML
    ───────────────────────────────────────────── */
    let currentPage = 'dashboard';

    function navigateTo(page) {
        if (!PAGES[page]) return;
        currentPage = page;

        /* Update nav highlights */
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.toggle('active', item.dataset.page === page);
        });

        /* Swap content */
        const main = document.querySelector('.content');
        if (!main) return;
        main.style.opacity = '0';
        main.style.transform = 'translateY(10px)';

        setTimeout(() => {
            main.innerHTML = PAGES[page]();
            main.style.transition = 'opacity .25s ease, transform .25s ease';
            main.style.opacity = '1';
            main.style.transform = 'translateY(0)';
            wirePageButtons(page);
        }, 180);
    }

    /* ─────────────────────────────────────────────
       WIRE PAGE-SPECIFIC BUTTONS
    ───────────────────────────────────────────── */
    function wirePageButtons(page) {
        /* Search boxes */
        const custSearch = document.getElementById('cust-search');
        if (custSearch) {
            custSearch.addEventListener('input', function() {
                const q = this.value.toLowerCase();
                document.querySelectorAll('#cust-table tbody tr').forEach(r => {
                    r.style.display = (!q || r.textContent.toLowerCase().includes(q)) ? '' : 'none';
                });
            });
        }
        const leadSearch = document.getElementById('lead-search');
        if (leadSearch) {
            leadSearch.addEventListener('input', function() {
                const q = this.value.toLowerCase();
                document.querySelectorAll('#lead-table tbody tr').forEach(r => {
                    r.style.display = (!q || r.textContent.toLowerCase().includes(q)) ? '' : 'none';
                });
            });
        }

        /* View customer */
        document.querySelectorAll('.view-cust-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const c = DATA.customers[+this.dataset.idx];
                if (!c) return;
                createModal('modal-view-cust', 'Customer Details',
                    `<div class="crm-lead-profile">
            <div class="crm-lead-avatar" style="background:linear-gradient(135deg,#5b6ef5,#8b6cf6)">${c.name[0]}</div>
            <div><h4>${c.name}</h4><p>${c.email}</p></div>
          </div>
          <div class="crm-detail-grid">
            <div class="crm-detail-item"><span>Customer ID</span><strong>${c.id}</strong></div>
            <div class="crm-detail-item"><span>Status</span>${statusBadge(c.status)}</div>
            <div class="crm-detail-item"><span>Phone</span><strong>${c.phone}</strong></div>
            <div class="crm-detail-item"><span>Company</span><strong>${c.company}</strong></div>
            <div class="crm-detail-item"><span>Industry</span><strong>${c.industry}</strong></div>
            <div class="crm-detail-item"><span>Total Value</span><strong style="color:#19b88a">${c.value}</strong></div>
            <div class="crm-detail-item" style="grid-column:1/-1"><span>Joined</span><strong>${c.joined}</strong></div>
          </div>
          <div class="crm-lead-actions-row">
            <button class="crm-btn crm-btn--outline" onclick="toast('Email sent!','success')">✉ Send Email</button>
            <button class="crm-btn crm-btn--outline" onclick="toast('Meeting scheduled!','success')">📅 Schedule</button>
          </div>`,
                    `<button class="crm-btn crm-btn--ghost" data-close="modal-view-cust">Close</button>
           <button class="crm-btn crm-btn--primary" onclick="closeModal('modal-view-cust');toast('Customer updated!','success')">Save Changes</button>`
                );
            });
        });

        /* View lead */
        document.querySelectorAll('.view-lead-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const lead = DATA.leads.find(l => l.id === this.dataset.id);
                if (!lead) return;
                createModal('modal-view-lead', 'Lead Details',
                    `<div class="crm-lead-profile">
            <div class="crm-lead-avatar" style="background:linear-gradient(135deg,#f5a623,#fac55a)">${lead.name[0]}</div>
            <div><h4>${lead.name}</h4><p>${lead.email}</p></div>
          </div>
          <div class="crm-detail-grid">
            <div class="crm-detail-item"><span>Lead ID</span><strong>${lead.id}</strong></div>
            <div class="crm-detail-item"><span>Status</span>${statusBadge(lead.status)}</div>
            <div class="crm-detail-item"><span>Source</span><strong>${lead.source}</strong></div>
            <div class="crm-detail-item"><span>Date Added</span><strong>${lead.date}</strong></div>
            <div class="crm-detail-item" style="grid-column:1/-1"><span>Lead Score</span>${scoreBar(lead.score)}</div>
          </div>
          <div class="crm-lead-actions-row">
            <button class="crm-btn crm-btn--outline" onclick="toast('Email sent!','success')">✉ Email</button>
            <button class="crm-btn crm-btn--outline" onclick="openScheduleMeetingGlobal()">📅 Meet</button>
            <button class="crm-btn crm-btn--outline" onclick="toast('Deal created!','success')">🤝 Deal</button>
          </div>`,
                    `<button class="crm-btn crm-btn--ghost" data-close="modal-view-lead">Close</button>
           <button class="crm-btn crm-btn--primary" onclick="closeModal('modal-view-lead');toast('Lead updated!','success')">Save Changes</button>`
                );
            });
        });

        /* View deal */
        document.querySelectorAll('.view-deal-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const d = DATA.deals[+this.dataset.idx];
                if (!d) return;
                createModal('modal-view-deal', 'Deal Details',
                    `<div class="crm-lead-profile">
            <div class="crm-lead-avatar" style="background:linear-gradient(135deg,#19b88a,#0ed4a8);font-size:14px">🤝</div>
            <div><h4>${d.title}</h4><p>${d.contact}</p></div>
          </div>
          <div class="crm-detail-grid">
            <div class="crm-detail-item"><span>Deal ID</span><strong>${d.id}</strong></div>
            <div class="crm-detail-item"><span>Stage</span>${statusBadge(d.stage)}</div>
            <div class="crm-detail-item"><span>Value</span><strong style="color:#19b88a">${d.value}</strong></div>
            <div class="crm-detail-item"><span>Close Date</span><strong>${d.close}</strong></div>
            <div class="crm-detail-item" style="grid-column:1/-1"><span>Win Probability</span>${scoreBar(d.prob)}</div>
          </div>`,
                    `<button class="crm-btn crm-btn--ghost" data-close="modal-view-deal">Close</button>
           <button class="crm-btn crm-btn--primary" onclick="closeModal('modal-view-deal');toast('Deal updated!','success')">Save Changes</button>`
                );
            });
        });

        /* Add buttons */
        const addCust = document.getElementById('add-cust-btn');
        if (addCust) addCust.addEventListener('click', openAddCustomer);
        const addLead = document.getElementById('add-lead-btn') || document.getElementById('hdr-add-lead');
        if (addLead) addLead.addEventListener('click', openAddLead);
        const addDeal = document.getElementById('add-deal-btn');
        if (addDeal) addDeal.addEventListener('click', openCreateDeal);
        const addProd = document.getElementById('add-prod-btn');
        if (addProd) addProd.addEventListener('click', () => {
            createModal('modal-add-prod', 'Add Product',
                c2(ff('Product Name', 'prod-name', 'text', 'e.g. CRM Pro'),
                    fs('Category', 'prod-cat', [{ v: 'software', l: 'Software' }, { v: 'service', l: 'Service' }, { v: 'support', l: 'Support' }])) +
                c2(ff('Price', 'prod-price', 'text', '₹4,999/mo'),
                    fs('Status', 'prod-status', [{ v: 'active', l: 'Active' }, { v: 'inactive', l: 'Inactive' }])) +
                ft('Description', 'prod-desc', 'Brief product description…'),
                `<button class="crm-btn crm-btn--ghost" data-close="modal-add-prod">Cancel</button>
         <button class="crm-btn crm-btn--primary" onclick="closeModal('modal-add-prod');toast('Product added!','success')">Add Product</button>`
            );
        });
        const genRep = document.getElementById('gen-report-btn');
        if (genRep) genRep.addEventListener('click', openGenerateReport);
        const saveSettings = document.getElementById('save-settings-btn');
        if (saveSettings) saveSettings.addEventListener('click', () => toast('Settings saved successfully!', 'success'));

        /* Dashboard quick actions */
        if (page === 'dashboard') {
            const qa = {
                'qa-cust': openAddCustomer,
                'qa-lead': openAddLead,
                'qa-deal': openCreateDeal,
                'qa-report': openGenerateReport,
                'qa-meet': openScheduleMeeting,
                'qa-email': openSendEmail,
            };
            Object.entries(qa).forEach(([id, fn]) => {
                const el = document.getElementById(id);
                if (el) el.addEventListener('click', fn);
            });
            /* view lead in dashboard table */
            document.querySelectorAll('.view-lead-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    const lead = DATA.leads.find(l => l.id === this.dataset.id);
                    if (lead) {
                        const fakeBtn = { dataset: { id: lead.id } };
                        /* reuse by triggering click on first matching row */
                        this.click && wirePageButtons('dashboard');
                    }
                });
            });
        }
    }

    /* ─────────────────────────────────────────────
       MODAL DEFINITIONS (global, accessible)
    ───────────────────────────────────────────── */
    function openAddLead() {
        createModal('modal-lead', '➕ Add New Lead',
            c2(ff('Full Name', 'lead-name', 'text', 'e.g. Ravi Kumar'), ff('Email', 'lead-email', 'email', 'name@company.com')) +
            c2(ff('Phone', 'lead-phone', 'tel', '+91 98765 43210', false),
                fs('Source', 'lead-source', [{ v: 'website', l: 'Website' }, { v: 'referral', l: 'Referral' }, { v: 'linkedin', l: 'LinkedIn' }, { v: 'email', l: 'Email Campaign' }, { v: 'event', l: 'Event' }, { v: 'other', l: 'Other' }])) +
            c2(fs('Status', 'lead-status', [{ v: 'new', l: 'New' }, { v: 'contacted', l: 'Contacted' }, { v: 'qualified', l: 'Qualified' }]),
                ff('Company', 'lead-company', 'text', 'Company Ltd.', false)) +
            ft('Notes', 'lead-notes', 'Any additional information…'),
            `<button class="crm-btn crm-btn--ghost" data-close="modal-lead">Cancel</button>
       <button class="crm-btn crm-btn--primary" id="save-lead-btn">Save Lead</button>`
        );
        document.getElementById('save-lead-btn').addEventListener('click', () => {
            const name = document.getElementById('lead-name').value.trim();
            const email = document.getElementById('lead-email').value.trim();
            if (!name || !email) { toast('Name and Email are required.', 'error'); return; }
            closeModal('modal-lead');
            toast(`Lead "${name}" added successfully!`, 'success');
        });
    }

    function openAddCustomer() {
        createModal('modal-customer', '👤 Add Customer',
            c2(ff('First Name', 'cust-fname', 'text', 'First name'), ff('Last Name', 'cust-lname', 'text', 'Last name')) +
            c2(ff('Email', 'cust-email', 'email', 'name@company.com'), ff('Phone', 'cust-phone', 'tel', '+91 …', false)) +
            c2(ff('Company', 'cust-company', 'text', 'Company Ltd.', false),
                fs('Industry', 'cust-industry', [{ v: 'tech', l: 'Technology' }, { v: 'finance', l: 'Finance' }, { v: 'health', l: 'Healthcare' }, { v: 'retail', l: 'Retail' }, { v: 'edu', l: 'Education' }, { v: 'other', l: 'Other' }], false)) +
            ft('Address', 'cust-address', '123 Street, City, State…'),
            `<button class="crm-btn crm-btn--ghost" data-close="modal-customer">Cancel</button>
       <button class="crm-btn crm-btn--primary" id="save-cust-btn">Add Customer</button>`
        );
        document.getElementById('save-cust-btn').addEventListener('click', () => {
            const f = document.getElementById('cust-fname').value.trim();
            const e = document.getElementById('cust-email').value.trim();
            if (!f || !e) { toast('First Name and Email are required.', 'error'); return; }
            closeModal('modal-customer'); toast(`Customer "${f}" added!`, 'success');
        });
    }

    function openCreateDeal() {
        createModal('modal-deal', '🤝 Create Deal',
            ff('Deal Title', 'deal-title', 'text', 'e.g. Enterprise License Q3') +
            c2(ff('Deal Value (₹)', 'deal-value', 'number', '0'),
                fs('Stage', 'deal-stage', [{ v: 'prospect', l: 'Prospect' }, { v: 'proposal', l: 'Proposal Sent' }, { v: 'negotiation', l: 'Negotiation' }, { v: 'closed-won', l: 'Closed Won' }, { v: 'closed-lost', l: 'Closed Lost' }])) +
            c2(ff('Contact Person', 'deal-contact', 'text', 'Lead / Customer name'), ff('Expected Close', 'deal-close', 'date', '')) +
            ft('Deal Notes', 'deal-notes', 'Key details about this deal…'),
            `<button class="crm-btn crm-btn--ghost" data-close="modal-deal">Cancel</button>
       <button class="crm-btn crm-btn--primary" id="save-deal-btn">Create Deal</button>`
        );
        document.getElementById('save-deal-btn').addEventListener('click', () => {
            const t = document.getElementById('deal-title').value.trim();
            if (!t) { toast('Deal title is required.', 'error'); return; }
            closeModal('modal-deal'); toast(`Deal "${t}" created!`, 'success');
        });
    }

    function openGenerateReport() {
        createModal('modal-report', '📊 Generate Report',
            c2(fs('Report Type', 'rep-type', [{ v: 'leads', l: 'Lead Summary' }, { v: 'revenue', l: 'Revenue Report' }, { v: 'customers', l: 'Customer Report' }, { v: 'deals', l: 'Deals Pipeline' }, { v: 'activity', l: 'Activity Log' }]),
                fs('Format', 'rep-format', [{ v: 'pdf', l: 'PDF' }, { v: 'excel', l: 'Excel (.xlsx)' }, { v: 'csv', l: 'CSV' }])) +
            c2(ff('From Date', 'rep-from', 'date', ''), ff('To Date', 'rep-to', 'date', '')),
            `<button class="crm-btn crm-btn--ghost" data-close="modal-report">Cancel</button>
       <button class="crm-btn crm-btn--primary" id="gen-rep-btn2">Generate</button>`
        );
        document.getElementById('gen-rep-btn2').addEventListener('click', () => {
            const t = document.getElementById('rep-type').value;
            if (!t) { toast('Please select a report type.', 'error'); return; }
            closeModal('modal-report'); toast('Report is being generated…', 'info');
            setTimeout(() => toast('Report ready! Check your downloads.', 'success'), 2000);
        });
    }

    function openScheduleMeeting() {
        createModal('modal-meeting', '📅 Schedule Meeting',
            ff('Meeting Title', 'meet-title', 'text', 'e.g. Product Demo') +
            c2(ff('Date', 'meet-date', 'date', ''), ff('Time', 'meet-time', 'time', '')) +
            c2(ff('Duration (min)', 'meet-dur', 'number', '30'),
                fs('Type', 'meet-type', [{ v: 'video', l: 'Video Call' }, { v: 'phone', l: 'Phone Call' }, { v: 'onsite', l: 'On-site Visit' }])) +
            ff('Attendees', 'meet-attendees', 'text', 'Names or emails', false) +
            ft('Agenda', 'meet-notes', 'What will be discussed?'),
            `<button class="crm-btn crm-btn--ghost" data-close="modal-meeting">Cancel</button>
       <button class="crm-btn crm-btn--primary" id="save-meet-btn">Schedule</button>`
        );
        document.getElementById('save-meet-btn').addEventListener('click', () => {
            const t = document.getElementById('meet-title').value.trim();
            const d = document.getElementById('meet-date').value;
            if (!t || !d) { toast('Title and Date are required.', 'error'); return; }
            closeModal('modal-meeting'); toast(`Meeting "${t}" scheduled!`, 'success');
        });
    }

    function openSendEmail() {
        createModal('modal-email', '✉️ Send Email',
            ff('To', 'mail-to', 'email', 'recipient@example.com') +
            ff('Subject', 'mail-sub', 'text', 'Email subject line') +
            ft('Message', 'mail-body', 'Write your message here…'),
            `<button class="crm-btn crm-btn--ghost" data-close="modal-email">Cancel</button>
       <button class="crm-btn crm-btn--primary" id="send-mail-btn">Send Email</button>`
        );
        document.getElementById('send-mail-btn').addEventListener('click', () => {
            const to = document.getElementById('mail-to').value.trim();
            const sub = document.getElementById('mail-sub').value.trim();
            if (!to || !sub) { toast('To and Subject are required.', 'error'); return; }
            closeModal('modal-email'); toast(`Email sent to ${to}!`, 'success');
        });
    }

    /* expose to inline onclick handlers */
    window.openScheduleMeetingGlobal = openScheduleMeeting;
    window.closeModal = closeModal;
    window.toast = toast;

    /* ─────────────────────────────────────────────
       NOTIFICATION PANEL
    ───────────────────────────────────────────── */
    const NOTIFS = [
        { color: 'teal', text: '<strong>Ravi Kumar</strong> added as new lead', time: '2 min ago' },
        { color: 'orange', text: 'Deal <strong>#D-0042</strong> marked as Won', time: '18 min ago' },
        { color: 'purple', text: 'Meeting with <strong>Arjun Mehta</strong>', time: '1 hr ago' },
        { color: 'red', text: 'Email sent to <strong>Sneha Patel</strong>', time: '3 hr ago' },
        { color: 'teal', text: 'Report <strong>Q1-2026</strong> generated', time: 'Yesterday' },
    ];

    function toggleNotifPanel() {
        let panel = document.getElementById('notif-panel');
        if (panel) { panel.remove(); return; }
        panel = document.createElement('div');
        panel.id = 'notif-panel';
        panel.className = 'crm-notif-panel';
        panel.innerHTML = `
      <div class="crm-notif-header"><span>Notifications</span><button id="mark-all-read">Mark all read</button></div>
      <ul class="crm-notif-list">
        ${NOTIFS.map(n => `<li class="crm-notif-item"><div class="crm-notif-dot ${n.color}"></div><div class="crm-notif-body"><p>${n.text}</p><span>${n.time}</span></div></li>`).join('')}
      </ul>
      <div class="crm-notif-footer"><a href="#">View all notifications →</a></div>`;
        document.body.appendChild(panel);
        document.getElementById('mark-all-read').addEventListener('click', () => {
            const dot = document.querySelector('.notif-dot');
            if (dot) dot.style.display = 'none';
            toast('All notifications marked as read', 'success');
            panel.remove();
        });
        setTimeout(() => {
            document.addEventListener('click', function outside(e) {
                if (!panel.contains(e.target) && !e.target.closest('.notif-btn')) {
                    panel.remove();
                    document.removeEventListener('click', outside);
                }
            });
        }, 50);
    }

    /* ─────────────────────────────────────────────
       INJECT SHARED STYLES
    ───────────────────────────────────────────── */
    function injectStyles() {
        const s = document.createElement('style');
        s.textContent = `
/* Overlay & Modal */
.crm-overlay{position:fixed;inset:0;z-index:9000;background:rgba(27,30,46,.45);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;padding:20px;opacity:0;transition:opacity .25s ease;pointer-events:none}
.crm-overlay--open{opacity:1;pointer-events:all}
.crm-modal{background:#fff;border-radius:20px;width:100%;max-width:520px;max-height:90vh;overflow-y:auto;box-shadow:0 24px 64px rgba(27,30,46,.22);transform:translateY(20px) scale(.97);transition:transform .28s cubic-bezier(.34,1.56,.64,1)}
.crm-overlay--open .crm-modal{transform:translateY(0) scale(1)}
.crm-modal-header{display:flex;align-items:center;justify-content:space-between;padding:20px 24px 0}
.crm-modal-header h3{font-size:16px;font-weight:800;color:#1b1e2e}
.crm-modal-close{width:32px;height:32px;border-radius:8px;border:none;background:#f3f4f8;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#6b7280;transition:background .15s}
.crm-modal-close:hover{background:#feeaed;color:#e8526a}
.crm-modal-close svg{width:15px;height:15px;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;fill:none}
.crm-modal-body{padding:20px 24px}
.crm-modal-footer{padding:16px 24px 20px;border-top:1px solid #e8eaf2;display:flex;justify-content:flex-end;gap:10px}

/* Form */
.crm-col2{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.crm-field{display:flex;flex-direction:column;gap:5px;margin-bottom:14px}
.crm-field label{font-size:12px;font-weight:700;color:#1b1e2e}
.crm-field .req{color:#e8526a}
.crm-field input,.crm-field select,.crm-field textarea{font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;color:#1b1e2e;background:#f8f9ff;border:1.5px solid #e8eaf2;border-radius:10px;padding:9px 12px;outline:none;transition:border-color .18s,box-shadow .18s}
.crm-field input:focus,.crm-field select:focus,.crm-field textarea:focus{border-color:#5b6ef5;box-shadow:0 0 0 3px rgba(91,110,245,.1);background:#fff}
.crm-field textarea{resize:vertical}

/* Buttons */
.crm-btn{font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:700;padding:9px 20px;border-radius:10px;cursor:pointer;border:none;transition:all .17s}
.crm-btn--primary{background:linear-gradient(135deg,#5b6ef5,#7b60f5);color:#fff;box-shadow:0 3px 10px rgba(91,110,245,.3)}
.crm-btn--primary:hover{opacity:.88;transform:translateY(-1px)}
.crm-btn--ghost{background:#f3f4f8;color:#6b7280;border:1.5px solid #e8eaf2}
.crm-btn--ghost:hover{background:#e8eaf2}
.crm-btn--outline{background:#fff;color:#5b6ef5;border:1.5px solid #d4d9fc;flex:1}
.crm-btn--outline:hover{background:#eef0fe}

/* Lead profile */
.crm-lead-profile{display:flex;align-items:center;gap:14px;padding:14px;background:#f8f9ff;border-radius:14px;margin-bottom:18px}
.crm-lead-avatar{width:52px;height:52px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:18px;font-weight:800;flex-shrink:0;box-shadow:0 4px 12px rgba(0,0,0,.15)}
.crm-lead-profile h4{font-size:15px;font-weight:800;color:#1b1e2e}
.crm-lead-profile p{font-size:12.5px;color:#6b7280;margin-top:2px}
.crm-detail-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:18px}
.crm-detail-item{background:#f8f9ff;border-radius:12px;padding:12px 14px;display:flex;flex-direction:column;gap:3px}
.crm-detail-item span{font-size:11px;font-weight:600;color:#a3aab6;text-transform:uppercase;letter-spacing:.5px}
.crm-detail-item strong{font-size:13.5px;font-weight:700;color:#1b1e2e}
.crm-lead-actions-row{display:flex;gap:8px}

/* Toast */
.crm-toast-container{position:fixed;bottom:24px;right:24px;z-index:9999;display:flex;flex-direction:column;gap:10px;pointer-events:none}
.crm-toast{display:flex;align-items:center;gap:10px;padding:12px 18px;border-radius:12px;font-family:'Plus Jakarta Sans',sans-serif;font-size:13px;font-weight:600;box-shadow:0 4px 16px rgba(27,30,46,.14);opacity:0;transform:translateY(12px);transition:opacity .25s,transform .25s;pointer-events:none;min-width:240px}
.crm-toast--show{opacity:1;transform:translateY(0)}
.crm-toast--success{background:#e3f9f2;color:#0a7f5f}
.crm-toast--error{background:#fee8ec;color:#c53050}
.crm-toast--info{background:#eef0fe;color:#5b6ef5}
.crm-toast-icon{display:flex}
.crm-toast-icon svg{width:16px;height:16px;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}

/* Notif panel */
.crm-notif-panel{position:fixed;top:70px;right:20px;z-index:8000;width:320px;background:#fff;border:1px solid #e8eaf2;border-radius:16px;box-shadow:0 8px 32px rgba(27,30,46,.13);overflow:hidden;animation:fadeUp .2s ease both}
.crm-notif-header{display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-bottom:1px solid #e8eaf2}
.crm-notif-header span{font-size:13.5px;font-weight:800;color:#1b1e2e}
.crm-notif-header button{font-size:11.5px;font-weight:600;color:#5b6ef5;background:none;border:none;cursor:pointer}
.crm-notif-list{list-style:none;margin:0;padding:6px 0}
.crm-notif-item{display:flex;gap:10px;align-items:flex-start;padding:10px 16px;transition:background .15s}
.crm-notif-item:hover{background:#f8f9ff}
.crm-notif-dot{width:9px;height:9px;border-radius:50%;margin-top:5px;flex-shrink:0}
.crm-notif-dot.teal{background:#19b88a}.crm-notif-dot.orange{background:#f5a623}
.crm-notif-dot.purple{background:#8b6cf6}.crm-notif-dot.red{background:#e8526a}
.crm-notif-body p{font-size:12.5px;color:#1b1e2e;line-height:1.5}
.crm-notif-body span{font-size:11px;color:#a3aab6;margin-top:2px;display:block}
.crm-notif-footer{padding:12px 16px;border-top:1px solid #e8eaf2;text-align:center}
.crm-notif-footer a{font-size:12px;font-weight:700;color:#5b6ef5;text-decoration:none}

/* Settings nav */
.settings-nav-item{display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:8px;font-size:13px;font-weight:500;color:#6b7280;transition:background .15s,color .15s;text-decoration:none}
.settings-nav-item:hover{background:#e8f5eb;color:#1b1e2e}
.settings-nav-item.active{background:#eef0fe;color:#5b6ef5;font-weight:700}

/* Toggle switch */
.crm-toggle{position:absolute;top:0;left:0;right:0;bottom:0;background:#d1d5db;border-radius:24px;transition:background .2s;pointer-events:none}
.crm-toggle::before{content:'';position:absolute;width:18px;height:18px;left:3px;top:3px;background:#fff;border-radius:50%;transition:transform .2s;box-shadow:0 1px 3px rgba(0,0,0,.2)}
input:checked+.crm-toggle{background:#5b6ef5}
input:checked+.crm-toggle::before{transform:translateX(18px)}

/* mini-avatar blue variant */
.mini-avatar.blue{background:linear-gradient(135deg,#3b8adc,#5ba8f0)}

@keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
@media(max-width:560px){.crm-col2{grid-template-columns:1fr}.crm-lead-actions-row{flex-direction:column}.crm-modal{border-radius:14px 14px 0 0}.crm-overlay{align-items:flex-end;padding:0}}
    `;
        document.head.appendChild(s);
    }

    /* ─────────────────────────────────────────────
       WIRE NAV — attach data-page attrs + listeners
    ───────────────────────────────────────────── */
    function wireNav() {
        const navMap = [
            ['Dashboard', 'dashboard'],
            ['Customers', 'customers'],
            ['Leads', 'leads'],
            ['Deals', 'deals'],
            ['Reports', 'reports'],
            ['Products', 'products'],
            ['Settings', 'settings'],
        ];

        document.querySelectorAll('.nav-item').forEach(item => {
            const text = item.textContent.trim();
            const match = navMap.find(([label]) => text.startsWith(label));
            if (match) {
                item.dataset.page = match[1];
                item.addEventListener('click', e => {
                    e.preventDefault();
                    navigateTo(match[1]);
                });
            }
        });

        /* Notification bell */
        const notifBtn = document.querySelector('.notif-btn');
        if (notifBtn) notifBtn.addEventListener('click', toggleNotifPanel);

        /* Hamburger */
        const hamburger = document.getElementById('hamburger');
        const sidebar = document.getElementById('sidebar');
        if (hamburger && sidebar) {
            hamburger.addEventListener('click', () => sidebar.classList.toggle('open'));
            document.addEventListener('click', e => {
                if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && !hamburger.contains(e.target))
                    sidebar.classList.remove('open');
            });
        }
    }

    /* ─────────────────────────────────────────────
       INIT
    ───────────────────────────────────────────── */
    function init() {
        injectStyles();
        wireNav();
        /* Wire the existing dashboard buttons that were already on the page */
        wirePageButtons('dashboard');
        /* Mark Dashboard as active by default */
        document.querySelectorAll('.nav-item').forEach(item => {
            if (item.dataset.page === 'dashboard') item.classList.add('active');
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();