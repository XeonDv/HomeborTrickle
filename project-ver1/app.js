function App() {
    return (
        <div className="app" data-name="app">
            <Header />
            <main>
                <Hero />
                <Features />
                <Benefits />
                <ProviderShowcase />
            </main>
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
