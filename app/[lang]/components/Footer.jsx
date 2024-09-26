export default function Footer({ dictionary }) {
  return (
    <footer className="py-6 md:py-8 mt-8">
      <div className="container mx-auto">
        <p className="text-center text-sm  dark:text-white">
          {dictionary.copyright}
        </p>
      </div>
    </footer>
  );
}
