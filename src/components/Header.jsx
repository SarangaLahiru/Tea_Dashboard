const Header = () => (
    <div className="flex justify-between items-center p-5 bg-white shadow">
      <h1 className="text-xl font-bold">Welcome Back, Jay</h1>
      <div className="flex items-center gap-3">
        <span className="text-sm">🇱🇰</span>
        <img src="/avatar.png" alt="Profile" className="w-8 h-8 rounded-full" />
      </div>
    </div>
  );
  
  export default Header;
  