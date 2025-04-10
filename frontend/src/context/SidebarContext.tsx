import { createContext, useState, useContext } from "react";

const SidebarContext = createContext<{
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

export const SidebarProvider = ({
  children,
  defaultCollapsed = true,
}: {
  children: React.ReactNode;
  defaultCollapsed?: boolean;
}) => {
  const [collapsed, setCollapsed] = useState(defaultCollapsed);

  return (
    <SidebarContext.Provider value={{ collapsed, setCollapsed }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
    const context = useContext(SidebarContext);
    if (!context) {
      throw new Error("useSidebar must be used within a SidebarProvider");
    }
    return context;
  };