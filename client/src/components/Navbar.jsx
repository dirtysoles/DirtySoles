import { Link, useResolvedPath, useMatch } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">Dirty Soles</Link>
            <ul className="pages">
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/products">Products</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </ul>
        </nav>
    )
};

function CustomLink({to, children, ...props}) {
    const resolvePath = useResolvedPath(to);
    const isActive = useMatch({path : resolvePath.pathname, end:true });
    return (
        <li className={isActive ? 'active' : ''}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}