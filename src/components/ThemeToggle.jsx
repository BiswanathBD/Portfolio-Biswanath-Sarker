const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      className="fixed top-4 right-4 z-50 bg-white dark:bg-surface-dark p-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white transition-all hover:scale-110"
      onClick={toggleDarkMode}
    >
      <span className={`material-icons ${darkMode ? "hidden" : "block"}`}>
        dark_mode
      </span>
      <span className={`material-icons ${darkMode ? "block" : "hidden"}`}>
        light_mode
      </span>
    </button>
  );
};

export default ThemeToggle;
