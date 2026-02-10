export default function NewsHeroSection() {
    return (
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
                    src="/images/bg advantages.jpg"
                    alt="News Hero"
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
    );
}
