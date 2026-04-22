/**
 * AAAA CLASS PREMIUM MAIN MENU COMPONENT (2026 EDITION)
 * Poker Crafter V7.13 - Premium UI Upgrade
 * 
 * Интеграция:
 * 1. Добавить CSS классы в <style> секцию основного файла
 * 2. Заменить существующий компонент главного меню на этот
 * 3. Подключить анимации частиц через useEffect
 */

// ============================================================================
// CSS СТИЛИ ДЛЯ ИНТЕГРАЦИИ (добавить в <style> секцию после loading стилей)
// ============================================================================

const AAAA_MAIN_MENU_CSS = `
/* ============================================
   AAAA PREMIUM MAIN MENU (2026 EDITION)
   ============================================ */

.aaaa-main-menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem 1.5rem;
  position: relative;
  z-index: 10;
}

.aaaa-logo-container {
  position: relative;
  margin-bottom: 3rem;
  perspective: 1000px;
}

.aaaa-logo-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: logoFloat 6s ease-in-out infinite;
}

.aaaa-logo-icon {
  font-size: 6rem;
  filter: drop-shadow(0 0 60px rgba(255, 215, 0, 0.8));
  animation: logoGlow 3s ease-in-out infinite;
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FFD700 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.aaaa-logo-title {
  font-family: 'Cinzel Decorative', 'Cinzel', serif;
  font-size: 2.5rem;
  font-weight: 900;
  letter-spacing: 0.4em;
  margin-top: 1rem;
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FFD700 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 40px rgba(255, 215, 0, 0.5);
  text-align: center;
}

.aaaa-logo-subtitle {
  font-family: 'Cinzel', serif;
  font-size: 0.75rem;
  letter-spacing: 0.6em;
  color: rgba(255, 215, 0, 0.6);
  margin-top: 0.5rem;
  text-transform: uppercase;
}

@keyframes logoFloat {
  0%, 100% { transform: translateY(0) rotateX(0deg); }
  50% { transform: translateY(-10px) rotateX(5deg); }
}

@keyframes logoGlow {
  0%, 100% { filter: drop-shadow(0 0 60px rgba(255, 215, 0, 0.8)); }
  50% { filter: drop-shadow(0 0 80px rgba(255, 215, 0, 1)); }
}

.aaaa-menu-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 320px;
}

.aaaa-btn-premium {
  position: relative;
  padding: 1.25rem 2rem;
  font-family: 'Cinzel', serif;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: rgba(22, 18, 42, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.9);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.aaaa-btn-premium::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 215, 0, 0.2),
    transparent
  );
  transition: left 0.5s ease;
}

.aaaa-btn-premium:hover::before {
  left: 100%;
}

.aaaa-btn-premium:hover {
  transform: translateY(-3px) scale(1.02);
  border-color: rgba(255, 215, 0, 0.5);
  box-shadow:
    0 12px 48px rgba(0, 0, 0, 0.5),
    0 0 30px rgba(255, 215, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  color: #fff;
}

.aaaa-btn-premium:active {
  transform: translateY(-1px) scale(0.98);
}

.aaaa-btn-primary {
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.2) 0%, rgba(255, 165, 0, 0.2) 100%);
  border-color: rgba(255, 215, 0, 0.4);
}

.aaaa-btn-primary:hover {
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.3) 0%, rgba(255, 165, 0, 0.3) 100%);
  border-color: rgba(255, 215, 0, 0.7);
}

.aaaa-stats-panel {
  margin-top: 2.5rem;
  padding: 1.5rem;
  background: rgba(22, 18, 42, 0.5);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.5rem;
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 400px;
}

.aaaa-stat-item {
  text-align: center;
}

.aaaa-stat-value {
  font-family: 'Orbitron', monospace;
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.aaaa-stat-label {
  font-family: 'Cinzel', serif;
  font-size: 0.625rem;
  letter-spacing: 0.2em;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 0.25rem;
  text-transform: uppercase;
}

.aaaa-particles-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.aaaa-particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 215, 0, 0.6);
  border-radius: 50%;
  animation: particleFloat 15s linear infinite;
}

@keyframes particleFloat {
  0% {
    opacity: 0;
    transform: translateY(100vh) scale(0);
  }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% {
    opacity: 0;
    transform: translateY(-100vh) scale(1);
  }
}

.aaaa-version-badge {
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  padding: 0.5rem 1rem;
  background: rgba(22, 18, 42, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 215, 0, 0.3);
  border-radius: 2rem;
  font-family: 'Cinzel', serif;
  font-size: 0.625rem;
  letter-spacing: 0.15em;
  color: rgba(255, 215, 0, 0.8);
  text-transform: uppercase;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}
`;

// ============================================================================
// РЕАКТ КОМПОНЕНТ ГЛАВНОГО МЕНЮ КЛАССА АААА
// ============================================================================

function AAAAPremiumMainMenu({ onPlay, onShop, onCollection, onSettings, stats }) {
  const [particles, setParticles] = React.useState([]);
  
  // Генерация частиц при монтировании
  React.useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: 15 + Math.random() * 10,
      size: 2 + Math.random() * 4,
    }));
    setParticles(newParticles);
  }, []);

  // L10N хелпер
  const t = (key) => {
    const translations = {
      play: { ru: '▶ ИГРАТЬ', ua: '▶ ГРАТИ', en: '▶ PLAY', es: '▶ JUGAR', fr: '▶ JOUER', de: '▶ SPIELEN', pt: '▶ JOGAR', ja: '▶ プレイ', ko: '▶ 플레이', zh: '▶ 开始游戏' },
      shop: { ru: '🛒 МАГАЗИН', ua: '🛒 МАГАЗИН', en: '🛒 SHOP', es: '🛒 TIENDA', fr: '🛒 BOUTIQUE', de: '🛒 LADEN', pt: '🛒 LOJA', ja: '🛒 ショップ', ko: '🛒 상점', zh: '🛒 商店' },
      collection: { ru: '🃏 КОЛЛЕКЦИЯ', ua: '🃏 КОЛЕКЦІЯ', en: '🃏 COLLECTION', es: '🃏 COLECCIÓN', fr: '🃏 COLLECTION', de: '🃏 SAMMLUNG', pt: '🃏 COLEÇÃO', ja: '🃏 コレクション', ko: '🃏 컬렉션', zh: '🃏 收藏' },
      settings: { ru: '⚙️ НАСТРОЙКИ', ua: '⚙️ НАЛАШТУВАННЯ', en: '⚙️ SETTINGS', es: '⚙️ AJUSTES', fr: '⚙️ PARAMÈTRES', de: '⚙️ EINSTELLUNGEN', pt: '⚙️ CONFIGURAÇÕES', ja: '⚙️ 設定', ko: '⚙️ 설정', zh: '⚙️ 设置' },
      wins: { ru: 'ПОБЕДЫ', ua: 'ПЕРЕМОГИ', en: 'WINS', es: 'VICTORIAS', fr: 'VICTOIRES', de: 'SIEGE', pt: 'VITÓRIAS', ja: '勝利', ko: '승리', zh: '胜利' },
      score: { ru: 'ОЧКИ', ua: 'ОЧКИ', en: 'SCORE', es: 'PUNTUACIÓN', fr: 'SCORE', de: 'PUNKTE', pt: 'PONTUAÇÃO', ja: 'スコア', ko: '점수', zh: '分数' },
      gold: { ru: 'ЗОЛОТО', ua: 'ЗОЛОТО', en: 'GOLD', es: 'ORO', fr: 'OR', de: 'GOLD', pt: 'OURO', ja: 'ゴールド', ko: '골드', zh: '金币' },
      subtitle: { ru: 'AAAA POKER ROGUELIKE · 2026', ua: 'AAAA ПОКЕР РОГУГЛАЙК · 2026', en: 'AAAA POKER ROGUELIKE · 2026' },
    };
    const lang = navigator.language?.split('-')[0] || 'ru';
    return translations[key]?.[lang] || translations[key]?.en || key;
  };

  return React.createElement('div', { className: 'aaaa-main-menu' },
    // Фон с частицами
    React.createElement('div', { className: 'aaaa-particles-container' },
      particles.map(p => 
        React.createElement('div', {
          key: p.id,
          className: 'aaaa-particle',
          style: {
            left: p.left + '%',
            animationDelay: p.delay + 's',
            animationDuration: p.duration + 's',
            width: p.size + 'px',
            height: p.size + 'px',
          }
        })
      )
    ),
    
    // Логотип
    React.createElement('div', { className: 'aaaa-logo-container' },
      React.createElement('div', { className: 'aaaa-logo-wrapper' },
        React.createElement('div', { className: 'aaaa-logo-icon' }, '🂡'),
        React.createElement('h1', { className: 'aaaa-logo-title' }, 'POKER CRAFTER'),
        React.createElement('div', { className: 'aaaa-logo-subtitle' }, t('subtitle'))
      )
    ),
    
    // Кнопки меню
    React.createElement('div', { className: 'aaaa-menu-buttons' },
      React.createElement('button', {
        className: 'aaaa-btn-premium aaaa-btn-primary',
        onClick: onPlay
      }, t('play')),
      
      React.createElement('button', {
        className: 'aaaa-btn-premium',
        onClick: onShop
      }, t('shop')),
      
      React.createElement('button', {
        className: 'aaaa-btn-premium',
        onClick: onCollection
      }, t('collection')),
      
      React.createElement('button', {
        className: 'aaaa-btn-premium',
        onClick: onSettings
      }, t('settings'))
    ),
    
    // Статистика (если есть)
    stats && React.createElement('div', { className: 'aaaa-stats-panel' },
      React.createElement('div', { className: 'aaaa-stat-item' },
        React.createElement('div', { className: 'aaaa-stat-value' }, stats.wins || 0),
        React.createElement('div', { className: 'aaaa-stat-label' }, t('wins'))
      ),
      React.createElement('div', { className: 'aaaa-stat-item' },
        React.createElement('div', { className: 'aaaa-stat-value' }, stats.bestScore || 0),
        React.createElement('div', { className: 'aaaa-stat-label' }, t('score'))
      ),
      React.createElement('div', { className: 'aaaa-stat-item' },
        React.createElement('div', { className: 'aaaa-stat-value' }, stats.gold || 0),
        React.createElement('div', { className: 'aaaa-stat-label' }, t('gold'))
      )
    ),
    
    // Версия
    React.createElement('div', { className: 'aaaa-version-badge' }, 'v7.13 · AAAA 2026')
  );
}

// ============================================================================
// ЭКСПОРТ ДЛЯ ИНТЕГРАЦИИ
// ============================================================================

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AAAAPremiumMainMenu, AAAA_MAIN_MENU_CSS };
}

// Для прямого использования в браузере
if (typeof window !== 'undefined') {
  window.AAAAPremiumMainMenu = AAAAPremiumMainMenu;
  window.AAAA_MAIN_MENU_CSS = AAAA_MAIN_MENU_CSS;
}
