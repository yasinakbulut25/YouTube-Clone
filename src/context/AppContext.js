import { createContext, useState } from "react";

const AppContext = createContext();

function Provider({ children }) {
  const [sidebarControl, setSidebarControl] = useState(true);
  const [theme, setTheme] = useState(false);

  const changeTheme = () => {
    setTheme(!theme);
    document.getElementsByTagName("body")[0].className = theme
      ? "light-mode"
      : "dark-mode";
  };
  const controlSidebar = () => setSidebarControl(!sidebarControl);

  const dummyPosts = [
    {
      id: 1,
      image: "../assets/images/posts/1.png",
      title: "How to Sell Anything Online",
      time: "32:24",
      user: "../assets/images/profiles/1.png",
    },
    {
      id: 2,
      image: "assets/images/posts/2.png",
      title:
        "Tüm Gençleri Buraya Davet Ediyoruz Gençler Takımı Burada Sen Nerdesin?",
      time: "16:28",
      user: "../assets/images/profiles/2.png",
    },
    {
      id: 3,
      image: "./assets/images/posts/3.png",
      title: "Bilmeyen Kalmasın Herkes Buraya | Burası Çok Önemli",
      time: "8:14",
      user: "../assets/images/profiles/3.png",
    },
    {
      id: 4,
      image: "../assets/images/posts/4.png",
      title: "Uyuyamayanların Yeri | Gece Yarısında Oyun Gecesi Zamanı",
      time: "24:52",
      user: "../assets/images/profiles/4.png",
    },
    {
      id: 5,
      image: "../assets/images/posts/5.png",
      title: "Bir Derdin Mi Var?",
      time: "18:16",
      user: "../assets/images/profiles/5.png",
    },
    {
      id: 6,
      image: "../assets/images/posts/6.png",
      title: "Finansal Hedeflerle Geleceğini Belirlemek Senin Elinde",
      time: "22:48",
      user: "../assets/images/profiles/6.png",
    },
    {
      id: 7,
      image: "../assets/images/posts/7.png",
      title:
        "Sosyal Medya Hesaplarında Yapılan Büyük Hatalar Takipçi Kaybetmeye Sebep Oluyor!",
      time: "19:57",
      user: "../assets/images/profiles/7.png",
    },
    {
      id: 8,
      image: "../assets/images/posts/8.png",
      title: "Tarafını Seç | Dövüş Arenası",
      time: "17:39",
      user: "../assets/images/profiles/8.png",
    },
  ];

  const dummyShorts = [
    {
      id: 1,
      image: "../assets/images/shorts/1.png",
      title: "YouTube Clone With HTML&CSS and React",
      views: "4.2M",
    },
    {
      id: 2,
      image: "../assets/images/shorts/2.png",
      title: "YouTube Clone With HTML&CSS and React",
      views: "183K",
    },
    {
      id: 3,
      image: "../assets/images/shorts/3.png",
      title: "YouTube Clone With HTML&CSS and React",
      views: "768K",
    },
    {
      id: 4,
      image: "../assets/images/shorts/4.png",
      title: "YouTube Clone With HTML&CSS and React",
      views: "2.6M",
    },
    {
      id: 5,
      image: "../assets/images/shorts/5.png",
      title: "YouTube Clone With HTML&CSS and React",
      views: "3.4M",
    },
    {
      id: 6,
      image: "../assets/images/shorts/6.png",
      title: "YouTube Clone With HTML&CSS and React",
      views: "947K",
    },
    {
      id: 7,
      image: "../assets/images/shorts/7.png",
      title: "YouTube Clone With HTML&CSS and React",
      views: "8.6M",
    },
    {
      id: 8,
      image: "../assets/images/shorts/8.png",
      title: "YouTube Clone With HTML&CSS and React",
      views: "1.3M",
    },
    {
      id: 9,
      image: "../assets/images/shorts/9.png",
      title: "YouTube Clone With HTML&CSS and React",
      views: "647K",
    },
    {
      id: 10,
      image: "../assets/images/shorts/10.png",
      title: "YouTube Clone With HTML&CSS and React",
      views: "2.7M",
    },
    {
      id: 11,
      image: "../assets/images/shorts/11.png",
      title: "YouTube Clone With HTML&CSS and React",
      views: "1.8M",
    },
    {
      id: 12,
      image: "../assets/images/shorts/12.png",
      title: "YouTube Clone With HTML&CSS and React",
      views: "3.1M",
    },
  ];
  const sharedValuesAndMethods = {
    sidebarControl,
    controlSidebar,
    dummyPosts,
    dummyShorts,
    theme,
    changeTheme,
  };

  return (
    <AppContext.Provider value={sharedValuesAndMethods}>
      {children}
    </AppContext.Provider>
  );
}

export { Provider };
export default AppContext;
