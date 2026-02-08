
const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-end">
                    <nav className="flex items-center gap-6">
                        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
                        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
                        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Projects</a>
                        <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;