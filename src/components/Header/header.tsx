import Link from 'next/link'

const Header = () => {

  
  return (
    <header className="flex justify-between bg-blue-400 p-6">
      <nav className="space-x-4 border border-2">
        <Link href="/">خانه</Link>
        <Link href="/blogs">مقالات</Link>
        <Link href="/about">درباره آلفا</Link>
        
      </nav>
      <h1 className="text-xl font-bold">My Header</h1>
       <nav className="space-x-4">
        <Link href="/"></Link>
        
      </nav>
    </header>
  );
};

export default Header
