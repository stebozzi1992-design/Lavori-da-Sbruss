```html
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CasaFix AI — Fai-da-Te, Calcolo Vernice e Idraulica</title>
    <!-- Font Inter da Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <!-- Tailwind CSS via CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                    },
                    colors: {
                        terracotta: {
                            DEFAULT: '#ea580c',
                            dark: '#c2410c',
                            soft: '#fff7ed',
                        },
                        slateink: {
                            DEFAULT: '#1e293b',
                            muted: '#64748b',
                        },
                        aqua: {
                            DEFAULT: '#0284c7',
                            dark: '#0369a1',
                            soft: '#f0f9ff',
                        },
                        canvasbg: '#f8fafc',
                    }
                }
            }
        }
    </script>
</head>
<body class="bg-canvasbg text-slateink font-sans antialiased min-h-screen flex flex-col selection:bg-terracotta/20 selection:text-terracotta-dark">

    <!-- Intestazione e Navigazione Principale -->
    <header class="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div class="max-w-4xl mx-auto px-4 sm:px-6">
            <!-- Riga superiore: Logo + Azione rapida -->
            <div class="h-16 flex items-center justify-between gap-3">
                <div class="flex items-center gap-2.5">
                    <div class="w-10 h-10 rounded-xl bg-terracotta text-white flex items-center justify-center shadow-sm shrink-0">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 10.5L12 3l9 7.5M5 9.5V20a1 1 0 001 1h12a1 1 0 001-1V9.5" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.5 13.5l-5 5m0-5l5 5" />
                        </svg>
                    </div>
                    <div>
                        <h1 class="text-lg font-extrabold tracking-tight text-slateink leading-none">
                            CasaFix <span class="text-terracotta">AI</span>
                        </h1>
                        <p class="text-xs text-slateink-muted font-medium mt-0.5">Restauro, verniciatura e piccola idraulica</p>
                    </div>
                </div>

                <!-- Navigazione Desktop (visibile da sm in su) -->
                <nav class="hidden sm:flex items-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200/80" aria-label="Sezioni principali">
                    <button type="button" data-tab="ai" class="nav-tab-btn px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>Analisi Foto AI</span>
                    </button>
                    <button type="button" data-tab="paint" class="nav-tab-btn px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                        </svg>
                        <span>Calcola Vernice</span>
                    </button>
                    <button type="button" data-tab="plumbing" class="nav-tab-btn px-3.5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
                        </svg>
                        <span>Guide Idraulica</span>
                    </button>
                </nav>
            </div>

            <!-- Navigazione Mobile (barra comoda subito sotto il logo) -->
            <nav class="flex sm:hidden items-center gap-1 pb-2.5" aria-label="Sezioni principali mobile">
                <button type="button" data-tab="ai" class="nav-tab-btn flex-1 py-2.5 px-2 rounded-xl text-xs font-bold transition-all flex flex-col items-center justify-center gap-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Analisi AI</span>
                </button>
                <button type="button" data-tab="paint" class="nav-tab-btn flex-1 py-2.5 px-2 rounded-xl text-xs font-bold transition-all flex flex-col items-center justify-center gap-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                    <span>Vernice</span>
                </button>
                <button type="button" data-tab="plumbing" class="nav-tab-btn flex-1 py-2.5 px-2 rounded-xl text-xs font-bold transition-all flex flex-col items-center justify-center gap-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
                    </svg>
                    <span>Idraulica</span>
                </button>
            </nav>
        </div>
    </header>

    <!-- Contenuto Principale -->
    <main class="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">

        <!-- =================================================================== -->
        <!-- SCHEDA 1: ANALISI FOTO AI (GEMINI API)                              -->
        <!-- =================================================================== -->
        <div id="tab-ai" class="tab-panel space-y-6">

            <!-- Hero Sezione AI -->
            <section id="aiHero" class="text-center space-y-2 pt-1">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-terracotta-soft text-terracotta text-xs font-bold border border-orange-200">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Diagnosi intelligente con foto o descrizione
                </span>
                <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-slateink leading-tight">
                    Mostrami cosa vuoi sistemare
                </h2>
                <p class="text-sm sm:text-base text-slateink-muted max-w-xl mx-auto">
                    Scatta una foto di un muro, una persiana o un guasto idraulico — oppure descrivi il problema: otterrai diagnosi, lista della spesa e guida passo passo.
                </p>
            </section>

            <!-- Box Errori / Avvisi (sostituisce alert()) -->
            <div id="aiErrorBox" class="hidden rounded-2xl bg-red-50 border border-red-200 p-4 flex items-start gap-3 text-red-900 shadow-sm" role="alert">
                <svg class="w-5 h-5 text-red-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <div class="flex-1 text-sm">
                    <p id="aiErrorTitle" class="font-bold">Attenzione</p>
                    <p id="aiErrorMessage" class="text-red-800 mt-0.5"></p>
                </div>
                <button id="aiCloseErrorBtn" type="button" class="p-1.5 rounded-lg hover:bg-red-100 text-red-700 transition-colors" aria-label="Chiudi avviso">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <!-- Form di Input AI -->
            <section id="aiInputSection" class="space-y-5">

                <!-- Card 1: Foto -->
                <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 space-y-4">
                    <div class="flex items-center justify-between gap-2">
                        <div class="flex items-center gap-2.5">
                            <span class="w-7 h-7 rounded-full bg-terracotta-soft text-terracotta text-xs font-extrabold flex items-center justify-center border border-orange-200">1</span>
                            <h3 class="text-base font-bold text-slateink">Foto del problema</h3>
                        </div>
                        <span class="text-xs font-medium text-slateink-muted">Consigliata (opzionale se descrivi)</span>
                    </div>

                    <input id="cameraInput" type="file" accept="image/*" capture="environment" class="hidden">
                    <input id="galleryInput" type="file" accept="image/*" class="hidden">

                    <!-- Area Dropzone -->
                    <div id="uploadDropzone" class="rounded-2xl border-2 border-dashed border-slate-300 hover:border-terracotta/70 bg-slate-50/70 transition-colors p-6 sm:p-8 text-center space-y-4">
                        <div class="w-14 h-14 mx-auto rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-terracotta">
                            <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div class="space-y-1">
                            <p class="text-sm sm:text-base font-semibold text-slateink">Scatta una foto ben illuminata della superficie o del guasto</p>
                            <p class="text-xs sm:text-sm text-slateink-muted">Oppure trascina qui un'immagine dal dispositivo (ridimensionata in automatico)</p>
                        </div>
                        <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-1">
                            <button id="openCameraBtn" type="button" class="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-terracotta hover:bg-terracotta-dark active:scale-[0.99] text-white font-semibold text-sm shadow-sm transition-all">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>Scatta foto</span>
                            </button>
                            <button id="openGalleryBtn" type="button" class="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-slate-50 active:scale-[0.99] text-slateink font-semibold text-sm border border-slate-300 shadow-sm transition-all">
                                <svg class="w-5 h-5 text-slateink-muted" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span>Carica dalla galleria</span>
                            </button>
                        </div>
                    </div>

                    <!-- Anteprima Foto -->
                    <div id="previewContainer" class="hidden space-y-3">
                        <div class="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                            <img id="imagePreview" src="" alt="Anteprima foto caricata" class="w-full max-h-80 object-contain mx-auto">
                            <button id="removePhotoBtn" type="button" class="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slateink/85 hover:bg-slateink text-white text-xs font-semibold backdrop-blur-sm shadow-sm transition-colors" aria-label="Rimuovi foto">
                                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                <span>Rimuovi</span>
                            </button>
                        </div>
                        <div class="flex flex-wrap items-center justify-between gap-2 text-xs text-slateink-muted">
                            <span id="photoMeta" class="font-medium truncate max-w-[230px] sm:max-w-md">Immagine pronta</span>
                            <button id="changePhotoBtn" type="button" class="text-terracotta hover:text-terracotta-dark font-semibold underline underline-offset-2 py-1">
                                Cambia foto
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Card 2: Categoria e Descrizione -->
                <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-6 space-y-5">
                    <div class="flex items-center justify-between gap-2">
                        <div class="flex items-center gap-2.5">
                            <span class="w-7 h-7 rounded-full bg-slate-100 text-slateink text-xs font-extrabold flex items-center justify-center border border-slate-200">2</span>
                            <h3 class="text-base font-bold text-slateink">Categoria e dettagli</h3>
                        </div>
                        <span class="text-xs font-medium text-slateink-muted">Aiuta l'AI a essere più precisa</span>
                    </div>

                    <!-- Chip Categorie -->
                    <div class="space-y-2.5">
                        <label class="block text-xs font-bold uppercase tracking-wider text-slateink-muted">Seleziona categoria</label>
                        <div id="surfaceChips" class="flex flex-wrap gap-2">
                            <button type="button" data-surface="Muro / Intonaco" class="surface-chip px-3.5 py-2.5 rounded-xl text-sm font-medium border border-slate-200 bg-slate-50 text-slateink hover:border-terracotta/60 transition-all">
                                🧱 Muro / Intonaco
                            </button>
                            <button type="button" data-surface="Persiana / Legno" class="surface-chip px-3.5 py-2.5 rounded-xl text-sm font-medium border border-slate-200 bg-slate-50 text-slateink hover:border-terracotta/60 transition-all">
                                🪵 Persiana / Legno
                            </button>
                            <button type="button" data-surface="Metallo / Ringhiera" class="surface-chip px-3.5 py-2.5 rounded-xl text-sm font-medium border border-slate-200 bg-slate-50 text-slateink hover:border-terracotta/60 transition-all">
                                ⛓️ Metallo / Ringhiera
                            </button>
                            <button type="button" data-surface="Infissi" class="surface-chip px-3.5 py-2.5 rounded-xl text-sm font-medium border border-slate-200 bg-slate-50 text-slateink hover:border-terracotta/60 transition-all">
                                🪟 Infissi
                            </button>
                            <button type="button" data-surface="Idraulica (Sifone / Miscelatore / Perdite)" data-theme="aqua" class="surface-chip px-3.5 py-2.5 rounded-xl text-sm font-medium border border-sky-200 bg-aqua-soft/70 text-aqua-dark hover:border-aqua transition-all">
                                💧 Idraulica (Sifone / Miscelatore / Perdite)
                            </button>
                        </div>
                    </div>

                    <!-- Campo Note -->
                    <div class="space-y-2">
                        <label for="extraNotes" class="block text-xs font-bold uppercase tracking-wider text-slateink-muted">Descrivi il problema o aggiungi note</label>
                        <textarea id="extraNotes" rows="3" placeholder="Es. 'Il muro ha muffa vicino al soffitto' oppure 'Il sifone del lavandino gocciola dalla ghiera inferiore'..." class="w-full rounded-xl border border-slate-300 bg-slate-50/50 focus:bg-white focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 outline-none p-3.5 text-sm text-slateink placeholder:text-slate-400 transition-all resize-none"></textarea>
                        <p class="text-xs text-slateink-muted">Non hai una foto pronta? Scrivi qui il problema e potrai comunque generare la guida.</p>
                    </div>
                </div>

                <!-- Pulsante Analizza -->
         
