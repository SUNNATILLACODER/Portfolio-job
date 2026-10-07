import React, { useState, useMemo } from 'react';
import { useLanguage } from '../i18n/useLanguage';
import { GithubIcon } from './icons/GithubIcon';
import { 
  ArrowUpRight, 
  ShoppingBag, 
  Eye, 
  Plus, 
  Minus, 
  Check, 
  Search, 
  X, 
  Trash2, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';

const MiniCity3D = React.lazy(() => import('./MiniCity3D').then((m) => ({ default: m.MiniCity3D })));

const TECH_GEAR_PRODUCTS = [
  {
    id: 'phone-1',
    category: 'smartphones',
    name: 'iPhone 15 Pro Max Titanium',
    badge: 'A17 Pro Chip',
    price: 1099,
    rating: '4.9 ★',
    desc: {
      uz: 'A17 Pro chip, Super Retina XDR ekran, 48MP asosiy kamera tizimi.',
      ru: 'Чип A17 Pro, экран Super Retina XDR, система камер 48 Мп.',
      en: 'A17 Pro chip, Super Retina XDR display, 48MP pro camera system.'
    }
  },
  {
    id: 'phone-2',
    category: 'smartphones',
    name: 'Samsung Galaxy S24 Ultra',
    badge: 'Snapdragon 8 Gen 3',
    price: 1199,
    rating: '4.8 ★',
    desc: {
      uz: 'Titan korpus, 200MP sensor, o‘rnatilgan S-Pen va Galaxy AI.',
      ru: 'Титановый корпус, сенсор 200 Мп, встроенный S-Pen и Galaxy AI.',
      en: 'Titanium build, 200MP sensor, integrated S-Pen, and Galaxy AI.'
    }
  },
  {
    id: 'laptop-1',
    category: 'laptops',
    name: 'MacBook Pro 16" M3 Max',
    badge: 'Liquid Retina XDR',
    price: 1999,
    rating: '5.0 ★',
    desc: {
      uz: '36GB birlashgan xotira, 512GB SSD, 22 soatgacha batareya quvvati.',
      ru: '36 ГБ объединенной памяти, 512 ГБ SSD, до 22 часов автономности.',
      en: '36GB Unified RAM, 512GB SSD, up to 22 hours battery endurance.'
    }
  },
  {
    id: 'laptop-2',
    category: 'laptops',
    name: 'Asus ROG Zephyrus G14',
    badge: 'Ryzen 9 & RTX 4070',
    price: 1449,
    rating: '4.8 ★',
    desc: {
      uz: '3K 120Hz OLED displey, 32GB RAM, yengil ixcham alyuminiy korpus.',
      ru: '3K 120Гц OLED экран, 32 ГБ RAM, ультратонкий алюминиевый корпус.',
      en: '3K 120Hz OLED screen, 32GB RAM, compact performance aluminum chassis.'
    }
  },
  {
    id: 'acc-1',
    category: 'accessories',
    name: 'Sony WH-1000XM5 ANC',
    badge: 'Shovqin so‘ndirish',
    price: 349,
    rating: '4.9 ★',
    desc: {
      uz: 'Yetakchi shovqin so‘ndirish texnologiyasi, 30 soat musiqa tinglash.',
      ru: 'Передовое шумоподавление, до 30 часов автономного звучания.',
      en: 'Industry-leading noise cancellation, 30h battery with quick charge.'
    }
  },
  {
    id: 'acc-2',
    category: 'accessories',
    name: 'Apple Watch Ultra 2 Titanium',
    badge: 'GPS + Cellular',
    price: 799,
    rating: '4.9 ★',
    desc: {
      uz: '49mm titan korpus, 3000 nit yorqinlik, 100m suv o‘tkazmaslik.',
      ru: '49 мм титановый корпус, яркость 3000 нит, глубина погружения 100 м.',
      en: '49mm rugged titanium case, 3000-nit display, 100m water resistance.'
    }
  }
];

export const ProjectCard = ({ project, onOpenDetails }) => {
  const { lang, t } = useLanguage();
  
  // Interactive TechGear Store State
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);
  const [recentlyAddedId, setRecentlyAddedId] = useState(null);
  
  // Initial cart with 2 realistic items
  const [cart, setCart] = useState([
    { ...TECH_GEAR_PRODUCTS[0], quantity: 1 },
    { ...TECH_GEAR_PRODUCTS[4], quantity: 1 }
  ]);

  const title = project.title[lang] || project.title.en;
  const category = project.category[lang] || project.category.en;
  const summary = project.summary[lang] || project.summary.en;

  // Filtered products based on search and category tab
  const filteredProducts = useMemo(() => {
    return TECH_GEAR_PRODUCTS.filter((prod) => {
      const matchesCategory = selectedCategory === 'all' || prod.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const localizedDesc = (prod.desc[lang] || prod.desc.en).toLowerCase();
      const matchesSearch = !query || 
        prod.name.toLowerCase().includes(query) || 
        prod.badge.toLowerCase().includes(query) ||
        localizedDesc.includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery, lang]);

  const totalCartCount = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart]);

  const totalCartPrice = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cart]);

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });

    setRecentlyAddedId(product.id);
    setTimeout(() => setRecentlyAddedId(null), 1800);
  };

  const handleUpdateQuantity = (productId, delta) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.id === productId) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean);
    });
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;
    setCheckoutSuccess(true);
    setTimeout(() => {
      setCart([]);
      setCheckoutSuccess(false);
      setIsCartOpen(false);
    }, 2200);
  };

  return (
    <div className="rounded-xl surface-card p-6 sm:p-10 border border-white/[0.08] relative overflow-hidden flex flex-col justify-between">
      
      {/* Top Metadata Header */}
      <div>
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00F5A0]" />
            <span className="text-xs font-mono tracking-wider text-[#00F5A0] uppercase font-semibold">
              {project.id === 'tech-gear-store'
                ? t.projects.featuredTag
                : (lang === 'uz' ? '02 // TEZ KUNDA' : lang === 'ru' ? '02 // СКОРО' : '02 // UPCOMING')}
            </span>
            <span className="text-xs font-mono text-[#A3AAA5] ml-2">
              // {category}
            </span>
          </div>

          <span className="text-xs font-mono text-[#A3AAA5]">
            {project.id === 'tech-gear-store'
              ? '01 // VERIFIED'
              : (lang === 'uz' ? '02 // JARAYONDA' : lang === 'ru' ? '02 // В РАЗРАБОТКЕ' : '02 // IN PROGRESS')}
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6">
          <div>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#F3F4F0] mb-2">
              {title}
            </h3>
            <p className="text-sm sm:text-base text-[#A3AAA5] max-w-2xl leading-relaxed">
              {summary}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onOpenDetails(project)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono font-medium text-[#F3F4F0] hover:border-[#00F5A0]/40 hover:text-[#00F5A0] transition-colors cursor-pointer"
            >
              <Eye size={13} />
              <span>{t.projects.viewDetails}</span>
            </button>

            {project.links.viewSource && (
              <a
                href={project.links.viewSource}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[#A3AAA5] hover:text-white transition-colors cursor-pointer"
                title="View Source on GitHub"
                aria-label="View Source on GitHub"
              >
                <GithubIcon size={16} />
              </a>
            )}

            {project.links.liveDemo ? (
              <a
                href={project.links.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#00F5A0] text-[#080A0A] font-mono font-semibold text-xs tracking-wide hover:bg-[#82FCD0] transition-colors cursor-pointer"
              >
                <span>{t.projects.liveDemo}</span>
                <ArrowUpRight size={14} />
              </a>
            ) : (
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#101413] border border-white/[0.08] text-[#00F5A0] font-mono text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0] animate-ping" />
                <span>{lang === 'uz' ? "Tez Kunda" : lang === 'ru' ? "Скоро" : "In Flight"}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Flagship Visual Previews: Either 3D Mini-City or TechGear Store */}
      {project.previewType === 'threejs-city' ? (
        <div className="w-full my-6 rounded-xl overflow-hidden border border-white/[0.08] shadow-inner bg-[#080A0A] relative">
          <React.Suspense
            fallback={
              <div className="h-[360px] sm:h-[420px] flex items-center justify-center bg-[#080A0A] text-xs font-mono text-[#00F5A0] animate-pulse">
                Loading 3D WebGL Scene...
              </div>
            }
          >
            <MiniCity3D />
          </React.Suspense>

          <div className="p-3.5 sm:p-4 bg-[#0d1210] border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00F5A0] animate-pulse" />
              <span className="text-[#F3F4F0] font-semibold">
                {lang === 'uz' ? "Tez Kunda: 3D Kiber-Shahar Loyihasi" : lang === 'ru' ? "Скоро: 3D Кибер-Город" : "Coming Soon: 3D Cyber City Experience"}
              </span>
            </div>
            <span className="text-[#A3AAA5] text-[11px]">
              {lang === 'uz' ? "Sichqonchani harakatlantirib 3D shaharni kuzating" : lang === 'ru' ? "Перемещайте курсор для вращения 3D сцены" : "Move mouse to shift perspective"}
            </span>
          </div>
        </div>
      ) : (
        /* TechGear Fully Functional Interactive Store UI Representation */
        <div className="w-full rounded-xl bg-[#080A0A] border border-white/[0.08] p-4 sm:p-6 my-6 shadow-inner relative">
          
          {/* Top Control Bar: Logo, Search, Category Tabs, Cart Toggle */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 mb-4 border-b border-white/[0.06] text-xs font-mono">
            
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00F5A0]" />
                <span className="font-extrabold text-amber-400 tracking-tight text-sm">
                  TECH<span className="text-white">GEAR</span>
                </span>
                <span className="text-[10px] text-[#00F5A0] bg-[#00F5A0]/10 px-2 py-0.5 rounded border border-[#00F5A0]/20 hidden sm:inline">
                  Interactive Demo
                </span>
              </div>

              {/* Mobile Cart Trigger */}
              <button
                type="button"
                onClick={() => setIsCartOpen(!isCartOpen)}
                className="md:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141A17] border border-[#00F5A0]/30 text-xs font-mono text-[#00F5A0] cursor-pointer"
              >
                <ShoppingBag size={13} />
                <span>({totalCartCount})</span>
              </button>
            </div>

            {/* Live Search Input */}
            <div className="relative flex-1 max-w-xs">
              <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#A3AAA5]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  lang === 'uz'
                    ? "Mahsulot qidirish..."
                    : lang === 'ru'
                    ? "Поиск товаров..."
                    : "Search products..."
                }
                className="w-full pl-8 pr-7 py-1.5 rounded-lg bg-[#101413] border border-white/[0.1] text-xs text-[#F3F4F0] placeholder:text-[#6E7772] focus:outline-none focus:border-[#00F5A0]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#A3AAA5] hover:text-white"
                >
                  <X size={12} />
                </button>
              )}
            </div>

            {/* Desktop Category Tabs & Cart Button */}
            <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
              <div className="flex items-center gap-1 bg-[#101413] p-1 rounded-lg border border-white/[0.06] overflow-x-auto">
                {[
                  { id: 'all', label: lang === 'uz' ? 'Barchasi' : lang === 'ru' ? 'Все' : 'All' },
                  { id: 'smartphones', label: lang === 'uz' ? 'Smartfon' : lang === 'ru' ? 'Смартфоны' : 'Phones' },
                  { id: 'laptops', label: lang === 'uz' ? 'Noutbuk' : lang === 'ru' ? 'Ноутбуки' : 'Laptops' },
                  { id: 'accessories', label: lang === 'uz' ? 'Aksessuar' : lang === 'ru' ? 'Аксессуары' : 'Audio' },
                ].map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-2.5 py-1 rounded text-[11px] cursor-pointer transition-colors ${
                      selectedCategory === cat.id
                        ? 'bg-[#00F5A0] text-[#080A0A] font-bold shadow-sm'
                        : 'text-[#A3AAA5] hover:text-white'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Desktop Cart Button */}
              <button
                type="button"
                onClick={() => setIsCartOpen(!isCartOpen)}
                className={`hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-lg border transition-all cursor-pointer ${
                  isCartOpen
                    ? 'bg-[#00F5A0] text-[#080A0A] border-[#00F5A0] font-bold shadow-[0_0_15px_rgba(0,245,160,0.3)]'
                    : 'bg-[#101413] border-white/[0.08] text-[#F3F4F0] hover:border-[#00F5A0]/40'
                }`}
                title="Open Shopping Cart"
              >
                <ShoppingBag size={14} className={isCartOpen ? 'text-[#080A0A]' : 'text-[#00F5A0]'} />
                <span>
                  {lang === 'uz' ? `Savat (${totalCartCount})` : lang === 'ru' ? `Корзина (${totalCartCount})` : `Cart (${totalCartCount})`}
                </span>
                <span className="font-semibold text-xs ml-0.5">
                  ${totalCartPrice.toLocaleString()}
                </span>
              </button>
            </div>

          </div>

          {/* Interactive Cart Drawer (When Cart is Open) */}
          {isCartOpen && (
            <div className="mb-5 p-4 rounded-xl bg-[#0E1311] border border-[#00F5A0]/30 shadow-2xl">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <ShoppingBag size={15} className="text-[#00F5A0]" />
                  <span className="font-mono text-xs font-bold text-[#F3F4F0]">
                    {lang === 'uz' ? "Sizning Savatchangiz" : lang === 'ru' ? "Ваша Корзина" : "Your Shopping Cart"} ({totalCartCount})
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {cart.length > 0 && (
                    <button
                      type="button"
                      onClick={handleClearCart}
                      className="text-[11px] font-mono text-[#E06C75] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 size={11} />
                      <span>{lang === 'uz' ? "Tozalash" : lang === 'ru' ? "Очистить" : "Clear"}</span>
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => setIsCartOpen(false)}
                    className="p-1 text-[#A3AAA5] hover:text-white"
                  >
                    <X size={15} />
                  </button>
                </div>
              </div>

              {checkoutSuccess ? (
                <div className="py-6 text-center text-[#00F5A0] flex flex-col items-center gap-2">
                  <CheckCircle2 size={32} />
                  <span className="font-mono font-bold text-sm">
                    {lang === 'uz' ? "Buyurtma muvaffaqiyatli rasmiylashtirildi!" : lang === 'ru' ? "Заказ успешно оформлен!" : "Order simulated successfully!"}
                  </span>
                  <span className="text-xs text-[#A3AAA5]">
                    {lang === 'uz' ? "Haqiqiy loyihada buyurtma bazaga yuboriladi." : lang === 'ru' ? "В реальном проекте данные отправляются на сервер." : "In live project, data is pushed to checkout API."}
                  </span>
                </div>
              ) : cart.length === 0 ? (
                <div className="py-6 text-center text-xs font-mono text-[#A3AAA5]">
                  {lang === 'uz' ? "Savatchangiz bo'sh. Mahsulotlarni qo'shing." : lang === 'ru' ? "Корзина пуста. Добавьте товары из каталога." : "Your cart is empty. Add items from the catalog."}
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="max-h-48 overflow-y-auto space-y-2 pr-1">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="p-2.5 rounded-lg bg-[#141A17] border border-white/[0.04] flex items-center justify-between text-xs font-mono"
                      >
                        <div className="flex-1 pr-2">
                          <span className="text-[#F3F4F0] font-medium block truncate">{item.name}</span>
                          <span className="text-[#00F5A0] text-[11px]">${item.price} each</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1.5 bg-[#080A0A] px-2 py-1 rounded border border-white/[0.08]">
                            <button
                              type="button"
                              onClick={() => handleUpdateQuantity(item.id, -1)}
                              className="text-[#A3AAA5] hover:text-white"
                            >
                              <Minus size={11} />
                            </button>
                            <span className="text-[#F3F4F0] font-bold w-4 text-center">{item.quantity}</span>
                            <button
                              type="button"
                              onClick={() => handleUpdateQuantity(item.id, 1)}
                              className="text-[#A3AAA5] hover:text-white"
                            >
                              <Plus size={11} />
                            </button>
                          </div>
                          <span className="font-bold text-[#F3F4F0] w-16 text-right">
                            ${(item.price * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Cart Total & Checkout Action */}
                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-mono text-[#A3AAA5] block">
                        {lang === 'uz' ? "Jami summa:" : lang === 'ru' ? "Итого к оплате:" : "Total Amount:"}
                      </span>
                      <span className="text-base font-bold font-mono text-[#00F5A0]">
                        ${totalCartPrice.toLocaleString()}.00
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handleCheckout}
                        className="px-4 py-2 rounded-lg bg-[#00F5A0] hover:bg-[#82FCD0] text-[#080A0A] font-mono font-bold text-xs tracking-wide transition-all shadow-[0_0_15px_rgba(0,245,160,0.3)] cursor-pointer"
                      >
                        {lang === 'uz' ? "Buyurtma berish" : lang === 'ru' ? "Оформить заказ" : "Checkout Demo"}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Product Grid (Filtered & Live) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 py-1">
            {filteredProducts.map((prod) => {
              const isJustAdded = recentlyAddedId === prod.id;
              const prodDesc = prod.desc[lang] || prod.desc.en;

              return (
                <div
                  key={prod.id}
                  className="p-4 rounded-xl bg-[#101413] border border-white/[0.06] flex flex-col justify-between group/item hover:border-white/20 transition-all"
                >
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-[10px] font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                        {prod.badge}
                      </span>
                      <span className="text-xs font-mono font-bold text-[#00F5A0]">
                        ${prod.price.toLocaleString()}
                      </span>
                    </div>

                    <h4 className="text-sm font-semibold text-[#F3F4F0] mb-1.5 group-hover/item:text-[#00F5A0] transition-colors">
                      {prod.name}
                    </h4>

                    <p className="text-xs text-[#A3AAA5] leading-relaxed mb-4 line-clamp-2">
                      {prodDesc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-white/[0.04] flex items-center justify-between gap-2">
                    <span className="text-[10px] font-mono text-[#A3AAA5]">
                      {prod.rating}
                    </span>

                    <button
                      type="button"
                      onClick={() => handleAddToCart(prod)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 cursor-pointer ${
                        isJustAdded
                          ? 'bg-[#00F5A0] text-[#080A0A] font-bold'
                          : 'bg-[#151D19] border border-[#00F5A0]/30 text-[#00F5A0] hover:bg-[#00F5A0] hover:text-[#080A0A]'
                      }`}
                    >
                      {isJustAdded ? (
                        <>
                          <Check size={12} />
                          <span>{lang === 'uz' ? "Qo'shildi!" : lang === 'ru' ? "Добавлено!" : "Added!"}</span>
                        </>
                      ) : (
                        <>
                          <Plus size={12} />
                          <span>{lang === 'uz' ? "Savatga" : lang === 'ru' ? "В корзину" : "Add to Cart"}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredProducts.length === 0 && (
            <div className="py-8 text-center text-xs font-mono text-[#A3AAA5]">
              {lang === 'uz'
                ? "Hech qanday mahsulot topilmadi. Qidiruv so'zini o'zgartirib ko'ring."
                : lang === 'ru'
                ? "Товары не найдены. Попробуйте изменить поисковый запрос."
                : "No products matched your search. Try adjusting keywords."}
            </div>
          )}

          {/* Interactive Footer Indicator & Direct Live Store Link */}
          <div className="mt-4 pt-3.5 border-t border-white/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] font-mono text-[#A3AAA5]">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0] animate-pulse" />
              <span>
                {lang === 'uz'
                  ? "Haqiqiy API katalogi, savatcha boshqaruvi va Dark Mode"
                  : lang === 'ru'
                  ? "Реальный каталог API, управление корзиной и Dark Mode"
                  : "REST API catalog, dynamic cart state & dark mode"}
              </span>
            </div>

            <a
              href="https://sunnatillacoder.github.io/Tech-gear/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00F5A0] hover:underline flex items-center gap-1 cursor-pointer"
            >
              <span>sunnatillacoder.github.io/Tech-gear</span>
              <ExternalLink size={11} />
            </a>
          </div>

        </div>
      )}

      {/* Tags and Technical Specifications */}
      <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded bg-[#080A0A] border border-white/[0.06] text-xs font-mono text-[#A3AAA5]"
            >
              {tag}
            </span>
          ))}
        </div>

        <span className="text-xs font-mono text-[#00F5A0] flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0]" />
          <span>Production Ready // React & Tailwind CSS</span>
        </span>
      </div>

    </div>
  );
};
