export default function MovieLayout({ children, modal }) {
  return (
    <main>
      {modal}
      {children}
    </main>
  );
}
