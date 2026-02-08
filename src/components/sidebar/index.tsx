const Sidebar = () => {
    return (
        <aside className="fixed top-0 left-0 h-full w-16 bg-white/5 backdrop-blur-md border-r border-white/10 flex flex-col justify-between p-4 z-40">
            <div className="flex flex-col items-center">
                <h2 className="text-xs uppercase tracking-widest font-bold [writing-mode:vertical-lr] rotate-180 py-4 opacity-50">Menu</h2>
            </div>
        </aside>
    );
};

export default Sidebar;