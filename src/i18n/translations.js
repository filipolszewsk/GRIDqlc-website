export const translations = {
    en: {
        nav: {
            features: "Features",
            workflow: "Grid Workflow",
            pricing: "Pricing",
            download: "Download"
        },
        hero: {
            headline_1: "Unlock the Most Advanced",
            headline_2: "QLC+ Fork Ever Built",
            subtitle: "GRIDqlc is not just a project; it’s a completely redesigned engine and virtual console that brings the workflow of high-end, expensive lighting desks directly to the QLC+ ecosystem. Save hours of programming and achieve professional-grade synchronization in minutes.",
            btn_primary: "Watch the Walkthrough",
            btn_secondary: "View Pricing",
            walkthrough_link: "https://youtu.be/qygM_5j6ax0?si=d65Qm_3D0Ay6RVWP"
        },
        workflow: {
            title: "Why GRIDqlc?",
            subtitle: "Experience features usually reserved for industry-standard consoles, built natively into QLC+.",
            card1_title: "Pro Workflow, Zero Cost",
            card1_desc: "Experience features usually reserved for industry-standard consoles without the premium price tag.",
            card2_title: "Hours to Minutes",
            card2_desc: "Adapt an entire show to a new set of 20+ fixtures in just 30 minutes. Save hours of programming time.",
            card3_title: "Built for Busking",
            card3_desc: "Override any parameter live, update presets on the fly, and stay in perfect sync without looking away.",
            comparison_title: "GRID System vs. Traditional Lists",
            comparison_subtitle: "Why does your show need an evolution?",
            comparison_headers: ["Feature", "Traditional Lists (Old School)", "GRIDqlc System (Professional)"],
            comparison_rows: [
                { feature: "Approach", old: "Channels: Controlling each slider separately.", new: "Logical: Controlling fixture groups and their roles." },
                { feature: "Adding Fixtures", old: "Hours: Manual assignment to dozens of scenes.", new: "Minutes: Inherits all effects instantly via group index." },
                { feature: "Effects (FX)", old: "Static: Hard to modify during the show.", new: "Relative: Real-time control of Speed and Size." },
                { feature: "Color Changes", old: "Abrupt: Requires manual transition programming.", new: "Smooth: Automated sweeps with a single click." },
                { feature: "Busking", old: "Chaos: Searching through a maze of channels.", new: "Intuitive: 2D layout reflects the physical stage." },
                { feature: "Safety", old: "Risky: Easy to accidentally overwrite a scene.", new: "Safe: Modify the look live without breaking the base." }
            ]
        },
        pricing: {
            title: "Choose Your Setup",
            subtitle: "Flexible licensing for professionals and enthusiasts.",
            free_name: "Free Core",
            free_price: "0",
            free_currency: "€",
            free_desc: "The open-source core. Access the custom QLC+ fork engine.",
            free_url: "#",
            pro_name: "Stage",
            pro_price: "99",
            pro_currency: "€",
            pro_desc: "Save days of programming on every setup. You are buying a ready-made ecosystem.",
            pro_url: "https://gridqlc.lemonsqueezy.com/checkout/buy/b6e304d5-4fd6-42cd-a4c1-4786c4dfb290",
            ultra_name: "Arena",
            ultra_price: "199",
            ultra_currency: "€",
            ultra_desc: "Future release. Upgrade path available for only €59 if you own Pro 1.0.",
            ultra_url: "https://gridqlc.lemonsqueezy.com/checkout/buy/3b6dab2f-ae56-49a9-af87-f7bc083bdab6",
            popular_badge: "Future Release",
            btn_text: "Get It Now",
            free_features: [
                "Custom QLC+ Fork (Win/Mac)",
                "Standard QLC+ workflow",
                "Community Support"
            ],
            pro_features: [
                "Custom QLC+ Fork",
                "Base Project (4 Fixture Groups)",
                "10-Column Fixture Mode",
                "Multi-FX Engine",
                "Access to Tutorials Base"
            ],
            ultra_features: [
                "Everything in Stage",
                "6 Fixture Groups",
                "20-Column Fixture Mode",
                "Per-Song Cuelists System",
                "Dedicated blocks for specific songs"
            ]
        },
        features: {
            title: "Key Features",
            subtitle: "Designed to supercharge your workflow.",
            f1_title: "Intelligent Grid-Based Layout",
            f1_desc: "Our stage-centric approach organizes your fixtures into logical groups (A, B, C, D, E). The console follows your physical layout, making control intuitive and lightning-fast.",
            f2_title: "Advanced Transition Engine",
            f2_desc: "Forget static changes. Use our sweep buttons to trigger color and attribute changes with specific orders: Left to Right, Middle to Out, or Instant Commit via 'Go'.",
            f3_title: "The Multi-FX Engine",
            f3_desc: "Synchronize Dimmer, Color, and Position effects. Includes custom DimmerWave EFX for flawless fly-ins and perfect sync with speed/size sliders.",
            f4_title: "Dynamic Q-List & Live Overrides",
            f4_desc: "Total control over narrative. Modify a look on stage and update presets via one click. Smooth professional looks with transition following.",
            f5_title: "Preset-Based Architecture",
            f5_desc: "Everything is indexed. Colors, Gobos, Prisms, and Positions are stored centrally. Change a fixture? Just update the index, and your entire show adapts instantly.",
            f6_title: "Advanced RGB Scripts Studio",
            f6_desc: "Break free from static limits. Access an infinite amount of input knobs to control RGB Script parameters on the fly, creating organic, constantly evolving looks.",
            whats_new_title: "What's New in the GRIDqlc Fork?",
            changelog: [
                { title: "🌊 DimmerWave EFX", desc: "New EFX algorithm inspired by GrandMA3 with Wave shape (sine, square, triangle, sawtooth), WaveLength control, Phase propagation, and existing EFX mode integration." },
                { title: "🎛️ Fixture Group Mode for EFX", desc: "Full Fixture Groups support in EFX including automatic grid mapping, Phase offsets per column (LTR, RTL, Center-to-Sides), Wings mode (1-10 blocks), Row Selection Filter, and per-column Direction states." },
                { title: "📊 RGB Matrix Extensions", desc: "Multi-Value Matrix reading from different script rows, Per-Definition Channel Mapping, dynamic Script Height, RGB Script Knobs control, Soft Patching in VCMatrix, and Row Filtering." },
                { title: "📋 VCCueList New Features", desc: "Step Index Output to DMX channels, direct Scene Recording into cues, Overwrite function (even during active playback), Quick Delete button, Channel Columns with editor, Virtual Crossfade fixes with LTP priority, and External Input control for Record/Overwrite/Delete." },
                { title: "🎚️ VC Slider Improvements", desc: "One-Shot mode (slider sends value once and stays), Dual External Input, and Output Channel assignment for Multi-Patch." },
                { title: "🕹️ VCXYPad Extensions", desc: "Fixture Group control mode, Soft Patch for EFX/Scene presets, Multi-Selection for presets, and QPointer crash fixes for race conditions." },
                { title: "🔧 Fixture Group Editor Upgrades", desc: "Multi-Selection support, Drag & Drop with live preview, Arrow key positioning, and improved swap logic." },
                { title: "↔️ Pan/Tilt Range Configuration", desc: "Custom Pan/Tilt ranges (e.g. 0-540°), scaling in relative EFX mode, and Reverse Pan/Tilt in channel modifiers." },
                { title: "🛠️ Multi-Patch Editor", desc: "Incremental option for assignments, improved auto-increment logic, Soft Patch for Animation Knobs, and fixed multi-channel assignments." },
                { title: "🪟 VCFrame Detach & Per-Page Size", desc: "Detach frames into floating windows with a header button, persistent save/load of detached states, per-page frame sizes, and reattachment fixes." },
                { title: "🔘 VCButton Channel Monitoring", desc: "Optional DMX channel value monitoring, automatic button deactivation on override, and stable function ownership tracking." },
                { title: "📥 Import Functions Dialog", desc: "Import functions from other .qxw projects with a new dialog, intelligent Fixture Mapping (map/new/skip), Auto-map by Name/Address, and automatic dependency resolution." },
                { title: "🗺️ Universe Grid View", desc: "Graphical visualization of the universe grid with fixture colors, Drag & Drop address changes, and automatic VC Input Remapping when addresses change." },
                { title: "📋 RGBMatrix / EFX Copy & Paste", desc: "Copy and paste matrix parameters via dialog, and Batch Paste RGBMatrix settings to multiple functions simultaneously." }
            ]
        },
        cta: {
            title: "Ready to Evolve Your Show?",
            desc: "GRIDqlc is launching soon for <strong>free download</strong>. Join the community and be the first to experience the next level of lighting control.",
            btn_primary: "Get GRIDqlc",
            btn_secondary: "Watch Walkthrough"
        },
        footer: {
            rights: "GRIDqlc. All rights reserved."
        }
    },
    pl: {
        nav: {
            features: "Funkcje",
            workflow: "Grid Workflow",
            pricing: "Cennik",
            download: "Pobierz"
        },
        hero: {
            headline_1: "Odblokuj Najbardziej Zaawansowany",
            headline_2: "Fork QLC+ Jaki Powstał",
            subtitle: "GRIDqlc to nie tylko projekt; to całkowicie przeprojektowany silnik i wirtualna konsola, która przenosi workflow z drogich, profesjonalnych konsolet. Zaoszczędź godziny programowania i osiągnij profesjonalną synchronizację w kilka minut.",
            btn_primary: "Obejrzyj Prezentację",
            btn_secondary: "Zobacz Cennik",
            walkthrough_link: "https://youtu.be/PS4vbdJFHRE?si=WUNjQp0qvD8Fl0QY"
        },
        workflow: {
            title: "Dlaczego GRIDqlc?",
            subtitle: "Doświadcz funkcji zarezerwowanych dotąd dla standardowych w branży konsolet, wbudowanych natywnie w QLC+.",
            card1_title: "Profesjonalny Workflow, Zero Kosztów",
            card1_desc: "Poznaj funkcje zazwyczaj zarezerwowane dla profesjonalnych konsolet bez wysokiej ceny.",
            card2_title: "Od Godzin do Minut",
            card2_desc: "Dostosuj całe show do nowego zestawu 20+ urządzeń w zaledwie 30 minut. Zaoszczędź godziny na programowaniu.",
            card3_title: "Stworzony do Buskingu",
            card3_desc: "Nadpisuj dowolne parametry na żywo, aktualizuj presety w locie i utrzymuj pełną synchronizację.",
            comparison_title: "GRID System vs. Traditional Lists",
            comparison_subtitle: "Dlaczego Twoje show potrzebuje ewolucji?",
            comparison_headers: ["Funkcja", "Tradycyjne Listy (Old School)", "GRIDqlc System (Professional)"],
            comparison_rows: [
                { feature: "Podejście", old: "Kanałowe: Każdy suwak z osobna.", new: "Logiczne: Grupy urządzeń i ich rola na scenie." },
                { feature: "Dodawanie Lamp", old: "Godziny: Ręczne przypisywanie do setek scen.", new: "Minuty: Dodajesz do grupy i dziedziczy wszystkie efekty." },
                { feature: "Efekty (FX)", old: "Statyczne: Trudne do zmiany w trakcie live'a.", new: "Relatywne: Kontrola Speed i Size w czasie rzeczywistym." },
                { feature: "Zmiana Kolorów", old: "Skokowa: Wymaga ręcznego pisania przejść.", new: "Płynna: Wyzwalasz płynne „sweepy” jednym kliknięciem." },
                { feature: "Busking (Live)", old: "Chaos: Szukanie suwaków w gąszczu kanałów.", new: "Intuicja: Układ 2D odzwierciedla fizyczną scenę." },
                { feature: "Bezpieczeństwo", old: "Ryzykowne: Łatwo nadpisać ważną scenę.", new: "Bezpieczne: Modyfikujesz wygląd bez niszczenia bazy." }
            ]
        },
        features: {
            title: "Kluczowe Funkcje",
            subtitle: "Zaprojektowane, aby przyspieszyć twój workflow.",
            f1_title: "Inteligentny Układ Oparty na Siatce",
            f1_desc: "Scentralizowane na scenie podejście organizuje urządzenia w logiczne grupy (A, B, C, D, E). Konsola odzwierciedla fizyczny układ, sprawiając, że przebieg jest intuicyjny i szybki.",
            f2_title: "Zaawansowany Silnik Przejść",
            f2_desc: "Zapomnij o statycznych zmianach. Użyj przycisków sweep, aby wyzwalać zmiany kierunkowo: Od Lewej, Do Środka, lub poprzez natychmiastowe kliknięcie 'Go'.",
            f3_title: "Silnik Multi-FX",
            f3_desc: "Zsynchronizuj efekty Dimmer, Kolor i Pozycja. Zawiera autorski efekt DimmerWave do bezbłędnych wjazdów i idealnej synchronizacji suwakami speed/size.",
            f4_title: "Dynamiczna Lista Scen i Live Overrides",
            f4_desc: "Modyfikuj wygląd na żywo i aktualizuj presety jednym kliknięciem. Płynne profesjonalne przejścia z uwzględnieniem czasów fade.",
            f5_title: "Architektura Oparta na Presetach",
            f5_desc: "Wszystko jest indeksowane. Kolory, Gobo, Pozycje są centralnie przechowywane. Zmieniasz sprzęt? Zaktualizuj indeks, a show zaadaptuje się natychmiast.",
            f6_title: "Zaawansowane Studio Skryptów RGB",
            f6_desc: "Wyjdź poza statyczne ograniczenia. Zyskaj dostęp do nieskończonej ilości live input knobs do skalowania parametrów skryptów RGB w czasie rzeczywistym, tworząc wciąż ewoluujące efekty.",
            whats_new_title: "Co Nowego w Forku GRIDqlc?",
            whats_new_desc: "Wprowadziliśmy ponad <strong>60 autorskich zmian</strong> do kodu źródłowego QLC+, aby to osiągnąć:",
            changelog: [
                { title: "🌊 DimmerWave EFX", desc: "Nowy algorytm EFX inspirowany GrandMA3 z parametrami: Wave shape (sine, square, triangle, sawtooth), WaveLength, propagacja fazy przez urządzenia i integracja z istniejącymi trybami EFX." },
                { title: "🎛️ Tryb Fixture Group dla EFX", desc: "Kompletna obsługa grup w EFX: automatyczne mapowanie z siatki, offsety fazy per kolumna (LTR, RTL, Center-to-Sides), tryb Wings (1-10 bloków), filtr wierszy oraz zachowanie ustawień Direction per kolumna." },
                { title: "📊 RGB Matrix - Rozszerzenia", desc: "Multi-Value Matrix (czytanie z wielu wierszy), mapowanie kanałów per typ, dynamiczna wysokość skryptów, sterowanie skryptami przez pokrętła (Knobs), Soft Patch w VCMatrix oraz filtry wierszy." },
                { title: "📋 VCCueList - Nowe Funkcje", desc: "Wysyłanie Outputu indeksu kroku po DMX, nagrywanie scen bezpośrednio do cue listy, funkcja Overwrite dla kroków (także podczas odtwarzania), szybkie usuwanie kroków, kolumny kanałów z edytorem, poprawiony Virtual Crossfade z priorytetem LTP oraz sterowanie z zewnętrznego kontrolera." },
                { title: "🎚️ VC Slider - Ulepszenia", desc: "Tryb One-Shot (slider wysyła wartość raz, pozostając w pozycji), Dual Input oraz Output Channel w Multi-Patchu." },
                { title: "🕹️ VCXYPad - Rozszerzenia", desc: "Sterowanie grupami urządzeń (Fixture Group), Soft Patch dla presetów EFX/Scene, wielokrotny wybór (Multi-Selection) oraz naprawione crashe (QPointer i race conditions)." },
                { title: "🔧 Fixture Group Editor - Ulepszenia", desc: "Zaznaczanie wielu urządzeń naraz, przeciąganie urządzeń (Drag & Drop) z podglądem na żywo, obsługa strzałek i poprawiona logika zamiany." },
                { title: "↔️ Pan/Tilt Range", desc: "Konfiguracja zakresów Pan/Tilt (np. 0-540°), skalowanie w trybie relative EFX oraz Reverse Pan/Tilt w modyfikatorach kanałów." },
                { title: "🛠️ Multi-Patch Editor", desc: "Opcja inkrementalna dla przypisań, poprawiona logika auto-increment, Soft Patch dla Animation Knobs i naprawione przypisywanie wielu kanałów." },
                { title: "🪟 VCFrame - Detach & Per-Page Size", desc: "Odłączanie ramek do osobnych pływających okien z przyciskiem, zapis/odczyt ich stanu z pliku projektu, niezależny rozmiar do każdej strony i poprawione ponowne ich dołączanie." },
                { title: "🔘 VCButton - Monitorowanie kanałów", desc: "Opcjonalne monitorowanie wartości kanałów DMX, automatyczna dezaktywacja przy nadpisaniu i stabilne monitorowanie z uwzględnieniem właściciela funkcji." },
                { title: "📥 Import Functions Dialog", desc: "Nowy dialog do importowania funkcji z innych projektów .qxw ze sprytnym mapowaniem urządzeń, auto-mapowaniem po nazwie/adresie i rozwiązywaniem zależności." },
                { title: "🗺️ Universe Grid View", desc: "Graficzny widok kanałów w siatce universum z kolorami urządzeń, zmiana adresów za pomocą Drag & Drop oraz automatyczne remapowanie wejść VC." },
                { title: "📋 RGBMatrix / EFX - Copy & Paste", desc: "Kopiowanie i wklejanie parametrów matrycy/EFX między funkcjami z dialogiem wyboru, oraz masowe wklejanie dla wielu efektów jednocześnie." }
            ]
        },
        pricing: {
            title: "Wybierz Swój Setup",
            subtitle: "Elastyczne licencjonowanie dla profesjonalistów i pasjonatów.",
            free_name: "Darmowy",
            free_price: "0",
            free_currency: "zł",
            free_desc: "Rdzeń open-source. Uzyskaj dostęp do naszego ulepszonego forka QLC+.",
            free_url: "#",
            pro_name: "Stage",
            pro_price: "399",
            pro_currency: "zł",
            pro_desc: "Zaoszczędź dni programowania na każdym setupie. Kupujesz gotowy ekosystem.",
            pro_url: "https://gridqlc.lemonsqueezy.com/checkout/buy/b6e304d5-4fd6-42cd-a4c1-4786c4dfb290",
            ultra_name: "Arena",
            ultra_price: "799",
            ultra_currency: "zł",
            ultra_desc: "Wkrótce. Dla posiadaczy wersji Pro v1.0, ścieżka upgrade'u za jedyne 59 EUR.",
            ultra_url: "https://gridqlc.lemonsqueezy.com/checkout/buy/3b6dab2f-ae56-49a9-af87-f7bc083bdab6",
            popular_badge: "Wkrótce",
            btn_text: "Wybieram",
            free_features: [
                "Specjalny Fork QLC+ (Win/Mac)",
                "Standardowe środowisko QLC+",
                "Wsparcie Społeczności"
            ],
            pro_features: [
                "Specjalny Fork QLC+",
                "Twój projekt bazowy (4 grupy)",
                "Tryb 10 Kolumn",
                "Silnik Multi-FX",
                "Dostęp do bazy tutoriali"
            ],
            ultra_features: [
                "Wszystko to co w Stage",
                "6 grup urządzeń",
                "Tryb 20 Kolumn",
                "System Per-Song Cuelists",
                "Dedykowane bloki pod konkretne utwory"
            ]
        },
        cta: {
            title: "Gotowy na zmianę swojego widowiska?",
            desc: "GRIDqlc już wkrótce dostępny do <strong>darmowego pobrania</strong>. Dołącz do społeczności i bądź pierwszą osobą, która wejdzie na kolejny poziom sterowania.",
            btn_primary: "Pobierz GRIDqlc",
            btn_secondary: "Obejrzyj Prezentację"
        },
        footer: {
            rights: "GRIDqlc. Wszelkie prawa zastrzeżone."
        }
    }
};
