import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import FormSection from '@/components/contact-page-comps/form-section';

export default function ContactPage() {
    return (
        <main>
            <Navbar />
            <div style={{ marginBottom: '50px' }}>
                <FormSection />
            </div>
            <Footer />
        </main>
    );
}