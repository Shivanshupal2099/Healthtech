const headerStyle = {
    border: "1px solid gray",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5px"
};

const logoStyle = {
    width: "100px",
    height: "32px",
    margin: "5px"
};

const navContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px"
};

const navItemStyle = {
    margin: "0"
};

const navItems = ["Feature", "Modules", "Compliance", "Pricing"];

function Header() {
    return (
        <header style={headerStyle}>
            <h2 style={logoStyle}>HCMS.Pro</h2>
            <nav style={navContainerStyle}>
                {navItems.map((item) => (
                    <h4 key={item} style={navItemStyle}>
                        {item}
                    </h4>
                ))}
            </nav>
        </header>
    );
}

export default Header;