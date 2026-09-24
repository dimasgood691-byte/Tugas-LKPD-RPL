// Function 1: Title Case Nama & Trim
function cleanNama(rawNama) {
    return rawNama
        .trim()
        .toLowerCase()
        .split(/\s+/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Function 2: Extract Domain Email
function extractDomain(rawEmail) {
    const email = rawEmail.trim().toLowerCase();
    if (email.includes('@') && (email.includes('.com') || email.includes('.id'))) {
        return email.split('@')[1];
    }
    return 'Email Tidak Valid';
}

// Function 3: Normalisasi & Masking No HP
function processPhoneNumber(rawPhone) {
    let clean = rawPhone.replace(/[\s-]/g, '');
    if (clean.startsWith('+')) {
        clean = clean.substring(1);
    } else if (clean.startsWith('0')) {
        clean = '62' + clean.substring(1);
    }

    const len = clean.length;
    let masked = clean;
    if (len >= 10) {
        masked = clean.substring(0, 4) + '****' + clean.substring(len - 4);
    }

    return { clean, masked };
}

// --- PENGUJIAN ---
console.log(cleanNama('  bUDI sANtosO  ')); // Output: Budi Santoso
console.log(extractDomain('user.test@techmart.co.id')); // Output: techmart.co.id
console.log(processPhoneNumber('+62 812-9876-5432')); // Output: { clean: '6281298765432', masked: '6281****5432' }