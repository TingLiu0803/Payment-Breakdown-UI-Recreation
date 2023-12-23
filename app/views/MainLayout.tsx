type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <main className="flex min-h-screen flex-col xl:p-32 md:p-24 p-10 bg-gray-100 bg-gradient-to-br">
      {children}
      <div className="fixed bottom-0 right-0 bg-green-200 w-7/12 h-2/3 opacity-50" style={{ clipPath: 'polygon(100% 20%, 100% 100%, 0 100%)' }}></div>
    </main>
  );
};
