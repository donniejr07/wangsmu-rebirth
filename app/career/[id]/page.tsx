import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import CareerJobDetail from '@/components/career-page-comps/career-job-detail';

interface PageProps {
    params: Promise<{ id: string }>;
}

// Data statis untuk keperluan pengembangan UI sebelum integrasi API backend selesai
const dummyJobs: Record<string, any> = {
    '1': {
        id: 1,
        title: 'Quality Control Staff',
        department: 'Quality Control',
        location: 'Bekasi, Indonesia',
        type: 'Full-time',
        short_description: 'Bertanggung jawab untuk memastikan kualitas produk sesuai standar perusahaan dan regulasi industri.',
        about_role: '<p>Sebagai Quality Control Staff di PT Wang Sarimulti Utama, Anda akan menjadi garda terdepan dalam memastikan setiap produk yang keluar dari lini produksi kami memenuhi standar kualitas tertinggi.</p><p>Anda akan bekerja sama dengan tim produksi dan engineering untuk mengidentifikasi, menganalisis, dan menyelesaikan masalah kualitas secara efektif dan efisien.</p>',
        what_you_do: '<ul><li>Melakukan inspeksi dan pengujian kualitas pada bahan baku, proses produksi, dan produk jadi</li><li>Menyusun laporan inspeksi harian dan bulanan</li><li>Mengidentifikasi produk cacat dan menganalisis akar penyebab masalah</li><li>Berkoordinasi dengan tim produksi untuk implementasi perbaikan kualitas</li><li>Memastikan kepatuhan terhadap standar ISO dan regulasi industri</li></ul>',
        requirements: '<ul><li>Pendidikan minimal D3/S1 Teknik Industri, Teknik Kimia, atau bidang terkait</li><li>Pengalaman minimal 1 tahun di bidang Quality Control (fresh graduate dipersilakan melamar)</li><li>Memahami konsep quality management system (ISO 9001)</li><li>Mampu menggunakan alat ukur kualitas (caliper, micrometer, dll)</li><li>Teliti, detail-oriented, dan memiliki kemampuan analitis yang baik</li><li>Mampu bekerja dalam tim maupun secara mandiri</li></ul>',
        what_we_offer: '<ul><li>Gaji kompetitif sesuai pengalaman dan kualifikasi</li><li>BPJS Kesehatan dan Ketenagakerjaan</li><li>Tunjangan makan dan transportasi</li><li>Kesempatan pengembangan karir dan pelatihan</li><li>Lingkungan kerja yang profesional dan supportive</li></ul>',
    },
    '2': {
        id: 2,
        title: 'IT Support Specialist',
        department: 'IT',
        location: 'Bekasi, Indonesia',
        type: 'Full-time',
        short_description: 'Menangani troubleshooting hardware/software dan maintenance infrastruktur IT perusahaan.',
        about_role: '<p>Sebagai IT Support Specialist, Anda akan bertanggung jawab untuk menjaga kelancaran operasional infrastruktur teknologi informasi perusahaan, termasuk hardware, software, dan jaringan.</p>',
        what_you_do: '<ul><li>Menangani troubleshooting perangkat keras dan lunak</li><li>Melakukan maintenance rutin terhadap server dan jaringan</li><li>Memberikan support teknis kepada seluruh departemen</li><li>Mengelola sistem backup dan data recovery</li></ul>',
        requirements: '<ul><li>Pendidikan minimal D3/S1 Teknik Informatika atau bidang terkait</li><li>Pengalaman minimal 1 tahun di bidang IT Support</li><li>Memahami jaringan komputer (LAN, WAN, TCP/IP)</li><li>Familiar dengan Windows Server dan Linux</li></ul>',
        what_we_offer: '<ul><li>Gaji kompetitif</li><li>BPJS Kesehatan dan Ketenagakerjaan</li><li>Pelatihan dan sertifikasi IT</li><li>Lingkungan kerja yang dinamis</li></ul>',
    },
    '3': {
        id: 3,
        title: 'PPIC Staff',
        department: 'PPIC',
        location: 'Bekasi, Indonesia',
        type: 'Full-time',
        short_description: 'Merencanakan dan mengontrol produksi serta inventori untuk memenuhi target produksi.',
        about_role: '<p>Sebagai PPIC Staff, Anda akan memegang peran penting dalam perencanaan produksi dan pengendalian inventori perusahaan, memastikan proses produksi berjalan lancar dan efisien.</p>',
        what_you_do: '<ul><li>Membuat jadwal dan rencana produksi harian/mingguan/bulanan</li><li>Mengontrol stok bahan baku dan barang jadi</li><li>Berkoordinasi dengan supplier untuk pengadaan material</li><li>Monitoring dan evaluasi pencapaian target produksi</li></ul>',
        requirements: '<ul><li>Pendidikan minimal S1 Teknik Industri atau bidang terkait</li><li>Pengalaman minimal 2 tahun di bidang PPIC</li><li>Menguasai Microsoft Excel dan sistem ERP</li><li>Memiliki kemampuan perencanaan dan analitis yang kuat</li></ul>',
        what_we_offer: '<ul><li>Gaji kompetitif sesuai pengalaman</li><li>Benefit lengkap (BPJS, tunjangan, dll)</li><li>Jenjang karir yang jelas</li></ul>',
    },
};

export default async function CareerDetailPage({ params }: PageProps) {
    const { id } = await params;

    // Mengambil data berdasarkan parameter ID dari dynamic route
    const job = dummyJobs[id] || null;

    if (!job) {
        return (
            <main className="min-h-screen">
                <Navbar />
                <div className="min-h-[60vh] flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="font-poppins text-2xl font-bold text-gray-800">
                            Job Not Found
                        </h1>
                        <a
                            href="/career"
                            className="text-[#0055A4] hover:underline mt-4 inline-block font-poppins"
                        >
                            Back to Career
                        </a>
                    </div>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main className="min-h-screen">
            <Navbar />
            <CareerJobDetail job={job} />
            <Footer />
        </main>
    );
}
