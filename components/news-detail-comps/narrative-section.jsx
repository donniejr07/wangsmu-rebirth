export default function NarrativeSection() {
    // Static data - akan diganti dengan data dari CMS nanti
    const newsData = {
        title: "PT Wang Sarimulti Utama Raih Penghargaan Industri Terbaik 2024",
        date: new Date("2024-12-15"),
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    };

    // Format tanggal: "Bulan Tanggal, Tahun" (contoh: "December 15, 2024")
    const formattedDate = newsData.date.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    return (
        <section style={{ marginLeft: '140px', marginRight: '140px' }}>
            {/* Judul */}
            <h1
                style={{
                    width: '1160px',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 600,
                    fontSize: '50px',
                    textAlign: 'left',
                    color: '#000000',
                    margin: 0,
                    lineHeight: 1.1,
                }}
            >
                {newsData.title}
            </h1>

            {/* Tanggal */}
            <p
                style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 100,
                    fontSize: '20px',
                    textAlign: 'left',
                    color: '#000000',
                    marginTop: '20px',
                    marginBottom: 0,
                }}
            >
                {formattedDate}
            </p>

            {/* Deskripsi */}
            <p
                style={{
                    width: '1160px',
                    fontFamily: 'Poppins, sans-serif',
                    fontWeight: 400,
                    fontSize: '24px',
                    textAlign: 'left',
                    color: '#000000',
                    marginTop: '30px',
                    lineHeight: 1.4,
                }}
            >
                {newsData.description}
            </p>
        </section>
    );
}
