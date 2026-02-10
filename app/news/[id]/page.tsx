import { getNewsDetail } from "@/lib/api";
import Link from "next/link";
import MoreNewsSection from "@/components/news-detail-comps/more-news-section";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function NewsDetailPage({ params }: PageProps) {
    const { id } = await params;
    const news = await getNewsDetail(id);

    if (!news) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800">News Not Found</h1>
                    <Link href="/" className="text-[#0055A4] hover:underline mt-4 inline-block">
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    const photoUrl = news.photo ? `http://127.0.0.1:8000/storage/${news.photo}` : "/images/bg advantages.jpg";
    const formattedDate = new Date(news.created_at).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    return (
        <>
            <Navbar />
            <section className="flex justify-center max-h-[740px]" style={{ marginTop: '24px', marginLeft: '34px', marginRight: '34px' }}>
                <div
                    className="relative mx-auto overflow-hidden"
                    style={{
                        width: '1372px',
                        height: '740px',
                        borderRadius: '150px',
                    }}
                >
                    <img
                        src={photoUrl}
                        alt={news.title}
                        className="w-full h-full object-cover"
                    />

                    <img
                        src="/images/logo-pt-puteh.png"
                        alt="PT Wang SMU Logo"
                        style={{
                            position: 'absolute',
                            top: '35px',
                            right: '50px',
                            width: '150px',
                            height: '110px',
                        }}
                    />
                </div>
            </section>

            <section style={{ marginLeft: '140px', marginRight: '140px', marginTop: '60px' }}>
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
                    {news.title}
                </h1>

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
                    {news.description}
                </p>
            </section>

            <div style={{ marginBottom: '60px' }}> <MoreNewsSection /></div>

            <Footer />
        </>
    );
}
