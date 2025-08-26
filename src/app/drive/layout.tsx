import { DriveProvider } from "../../context/driveContext";

export default function DriveLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DriveProvider>
        {children}
    </DriveProvider>
  );
}
