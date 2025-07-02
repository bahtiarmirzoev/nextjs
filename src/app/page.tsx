export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white font-sans">
      {/* Фоновое изображение */}
      <img
        src="/photo_2025-07-02_14-56-56.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover object-[center_25%] z-0"
      />
      {/* Тёмный градиентный оверлей */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/60 z-0" />

      {/* Контент поверх фона */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-20 py-10 backdrop-blur-sm">
        {/* Левая колонка — описание */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-yellow-300 drop-shadow">
            Подпиши петицию!
          </h1>
          <ul className="list-disc list-inside space-y-4 text-lg md:text-xl text-gray-200 leading-relaxed">
            <li>Закрытие всех массажек</li>
            <li>Права с 16 лет</li>
            <li>Бесплатный кальян при счете более 30 AZN</li>
            <li>Бан на Snapchat</li>
            <li>Бесплатные ногти, реснички и 80% скидка на бьюти процедуры</li>
            <li>Отмена кясир пулу во всех университетах</li>
          </ul>
        </div>

        {/* Правая колонка — форма */}
        <div className="w-full md:w-1/2 bg-white/10 text-white p-8 rounded-2xl shadow-2xl backdrop-blur-md border border-white/20 max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center">Форма подписи</h2>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Имя"
              className="w-full p-3 bg-white/20 placeholder-white text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <input
              type="text"
              placeholder="Фамилия"
              className="w-full p-3 bg-white/20 placeholder-white text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <input
              type="tel"
              placeholder="Номер телефона"
              className="w-full p-3 bg-white/20 placeholder-white text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              required
            />
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 rounded-md transition"
            >
              ПОДПИШИ БЛЯ
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
