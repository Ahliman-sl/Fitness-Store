function ContactUs() {
  return (
    <div className="w-full h-max mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Bizimle İletişime Geçin
      </h2>
      <p className="text-gray-600 mb-6">
        Bizimle iş yapmak isterseniz veya teklifiniz varsa lütfen aşağıdaki
        iletişim bilgilerinden bize ulaşın.
      </p>
      <div className="flex flex-col gap-5 ">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold text-gray-800">Telefon</h3>
          <p className="text-gray-600">+90 123 456 7890</p>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold text-gray-800">E-posta</h3>
          <p className="text-gray-600">info@ornekfirma.com</p>
        </div>
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold text-gray-800">Sosyal Medya</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 2.072a10 10 0 11-11.99 9.908c0 4.937 2.292 6.592 4.842 8.365 2.548 1.772 4.63 1.312 5.085.224 0 0 0 2.748-2.892 2.777s-2.893-2.776-2.893-2.776a3.332 3.332 0 01-2.293 1.776 10.002 10.002 0 01-9.759-8.639c-.623-6.48 4.59-11.693 11.069-12.314C21.47 1.755 22 2.072 22 2.072z" />
              </svg>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-400"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.59-2.47.69a4.25 4.25 0 001.87-2.34 8.48 8.48 0 01-2.69 1.02 4.27 4.27 0 00-7.29 3.88 12.11 12.11 0 01-8.8-4.46A4.27 4.27 0 003.67 8c-.1 1.88.92 3.6 2.41 4.13a4.27 4.27 0 01-1.93-.53c0 2.13 1.51 3.91 3.52 4.32a4.29 4.29 0 01-1.92.07 4.28 4.28 0 003.99 2.96A8.57 8.57 0 012 18.39a12.05 12.05 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.55a8.68 8.68 0 002.14-2.21z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-700"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5c0-1.1-.9-2-2-2zm-7 14H9v-6h3v6zm-1.5-7.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm9.5 7.5h-3v-3c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v3H9v-6h3v.78a3.5 3.5 0 016.5-1.28v6.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
