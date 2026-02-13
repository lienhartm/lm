'use strict'

window.onload = function () {
    document.body.innerHTML = `
        <div id="scene">
            <div id="card">
            ${logo(10)}
            </div>
        </div>
    `;
    document.getElementById('animate').addEventListener("click", function () {
        const body = document.querySelector('body');
        body.style.background = "#F8F8F8";
        body.innerHTML = `
            ${header()}
            <main>
                ${main()}
            </main>
            ${footer()}
        `;
    });
    document.addEventListener('click', function (event) {
        document.getElementById('content').style.backgroundColor = '#fff';
        if (!event.target || !event.target.id) {
            return;
        } else if (event.target && event.target.id && event.target.id.startsWith('chart-')) {
            const index = event.target.id.split('-')[1];
            chart(Number(index));
        } else if (event.target && event.target.id && event.target.id.startsWith('page-')) {
            const index = event.target.id.split('-')[1];
            page(Number(index));
        } else if (event.target && event.target.id && event.target.id.startsWith('site')) {
            window.location.href = 'https://lienhart-michael.dynamic-dns.net';
        }
    });
};

function logo(m) {
    return `
            <div id="animate" width="${45 * m}" height="${40 * m}">
                <div class="logo" id="logo" width="${45 * m}" height="${40 * m}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="${45 * m}" height="${40 * m}" viewBox="0 0 ${45 * m} ${40 * m}" fill="none">
                        <!-- Fond -->
                        <rect width="${45 * m}" height="${40 * m}" fill="#f2f2f2" stroke="#484848" stroke-width="10" />
                        <!-- Lettre L -->
                        <rect x="${5 * m}"  y="${5 * m}"  width="${5 * m}"  height="${30 * m}" fill="#696969" />
                        <rect x="${5 * m}"  y="${30 * m}" width="${20 * m}" height="${5 * m}"  fill="#696969" />
                        <!-- Lettre M -->
                        <rect x="${15 * m}" y="${5 * m}"  width="${5 * m}"  height="${30 * m}" fill="#989898" />
                        <rect x="${20 * m}" y="${10 * m}" width="${5 * m}"  height="${5 * m}"  fill="#989898" />
                        <rect x="${25 * m}" y="${15 * m}" width="${5 * m}"  height="${5 * m}"  fill="#989898" />
                        <rect x="${30 * m}" y="${10 * m}" width="${5 * m}"  height="${5 * m}"  fill="#989898" />
                        <rect x="${35 * m}" y="${5 * m}"  width="${5 * m}"  height="${30 * m}" fill="#989898" />
                        <!-- Ponctuation . -->
                        <rect x="${15 * m}"  y="${30 * m}" width="${5 * m}" height="${5 * m}" fill="#c8c8c8" />
                    </svg>
                </div>
            </div> 
    `;
}

// Affiche header
function header() {
    return `
        <header>
            <hr>
            <nav id="page-1">Présentation</nav>
            <hr>
            <nav id="page-2">Parcours</nav>
            <hr>
            <nav id="page-3">Projets</nav>
            <hr>
            <nav id="page-4">Contact</nav>
            <hr>
        </header>
    `;
}

function chart(x) {
    var chart = '';
    var main = document.getElementById('content');
    switch (x) {
        case 0:
            chart = `
                <h2>Mentions légales</h2>
                <ul>
                    <li>Editeur du site</li>
                    <p>
                        Nom : 
                        <b>Auto-entrepreneur</b>
                        <br>
                        Pays d'activité : 
                        <b>France</b>
                        <br>
                        Site web : 
                        <i id='site'>https://lienhartm.github.io/LM/</i>
                        <br>
                        Adresse e-mail de contact : via le 
                        <i id="form">formulaire de contact</i>
                    </p>
                    <li>Hébergement du site</li>
                    <p>
                        Hébergement : Auto-hébergé par <b id='cv'>LIENHART MICHAEL</b><br>
                        Localisation du server : <b>France</b>
                    </p>
                    <li>Responsabilité</li>
                    <p>L'éditeur du site met tout en oeuvre pour assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Cependant, il ne saurait être tenu responsable d'erreurs ou d'ommisions, ni des résultats pouvant être obtenus par l'usage de ces informations.</p>
                    <li>Propriété intellectuelle</li>
                    <p>Sauf mention contraire, tous les contenus (textes, images codes, projets, vidéos) présents sur le site sont la propriété exclusive de <b id='cv'>LIENHART MICHAEL</b>. Toute reproduction, représentation ou diffusion, totale oupartielle, sans autorisation préalable est interdite.</p>
                </ul>
            `;
            break;
        case 1:
            chart = `
                <h2>Politique de confidentialité (RGPD)</h2>
                <ol>
                    <li>Collecte des données personnelles</li>
                    <p>Les informations collectées via le formulaire de contact (nom, e-mail, message) sont utilisées uniquement pour répondre aux demandes des utilisateurs. Aucune donnée personnelle n'est transmise à des tiers sans consentement explicite.</p>
                    <li>Responsable du traitement</li>
                    <p>Responsable : 
                        <b id='cv'>LIENHART MICHAEL</b>
                        , auto-entrepreneur en 
                        <b>France</b>
                    </p>
                    <li>Conservation des données</li>
                    <p>Les données envoyées par formulaire sont conservées le temps nécessaire pour traiter la demande, puis supprimées.</p>
                    <li>Cookies et statistiques</li>
                    <p>Le site peut utiliser des cookies techniques ou analytiques afin d'améliorer la navigation et les performances. L'utilisateur peut configurer son navigateur pour refuser les cookies.</p>
                    <li>Droit d'accès, de rectification et de suppression</li>
                    <p>
                        Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données.
                        Pour exercer ce droit : contactez-moi via le 
                        <i id='form'>formulaire de contact</i>
                    </p>
                    <li>Sécurité</li>
                    <p>Le site met en oeuvre des mesures techniques pour protéger les données personnelles contre l'accès non autorisé.</p>
                </ol>
            `;
            break;
        case 2:
            chart = `
                <h2>Conditions Générales d'Utilisation (CGU)</h2>
                <ol>
                    <li>Objet</li>
                    <p>
                        Les présentes CGU régissent l'accès et l'utilisation du site 
                        <i id='site'>https://lienhartm.github.io/LM/</i>
                        .
                    </p>
                    <li>Acceptation</li>
                    <p>Tout utilisateur accédant au site accepte sans réserve les présentes conditions d'uilisation.</p>
                    <li>Accès au site</li>
                    <p>L'accès est libre et gratuit. Le site peut être temporairement suspendu pour maintenance ou mise à jour.</p>
                    <li>Contenu</li>
                    <p>Le contenu du site est fourni à titre informatif et peut être modifié à tout moment sans préavis.</p>
                    <li>Liens externes</li>
                    <p>
                        Des liens vers d'autres sites peuvent être proposés. 
                        <b id='cv'>LIENHART MICHAEL</b>
                         n'est pas responsable du contenu de ces sites tiers.
                    </p>
                    <li>Propriété intellectuelle</li>
                    <p>L'ensemble du contenu du site (textes, images, code, logos, etc.) est protégé par le droit d'auteur. Toutes reproduction non autorisée est interdite.</p>
                    <li>Responsabilité de l'utilisateur</li>
                    <p>L'utilisateur s'engage à ne pas perturber le bon fonctionnement du site ni tenter d'accéder à des zones non autorisées.</p>
                    <li>Droit applicable</li>
                    <p>Les présentes CGU sont soumises au droit français.</p>
                </ol>
            `;
            break;
        case 3:
            chart = `
                <h2>Charte de partenariat / collaboration</h2>
                <ol>
                    <li>Objectif de la charte</li>
                    <p>
                        Cette charte définit les principes de collaboration entre 
                        <b>LIENHART MICHAËL</b>
                         et toutes personne ou organisation ouhaitant coopérer sur des projets numériques (sites web, robotique, IA, etc.).
                    </p>
                    <br>
                    <li>
                        Engagements de 
                        <b id='cv'>LIENHART MICHAEL</b>
                    </li>
                    <p>
                        <span></span>Fournir un travail rigoureux, transparent et conforme aux objectifs du projet.
                        <br>
                        <span></span>Respecter la confidentialité des informations partégées.
                        <br>
                        <span></span>Favoriser l'esprit de collaboration, la transmission de connaissances et l'innovation.
                    </p>
                    <br />
                    <li>Engagements du partenaire</li>
                    <p>
                        <span></span>Fournir des informations claires et exactes sur le projet.
                        <br>
                        <span></span>Respecter les délais et la communication convenue.
                        <br>
                        <span></span>Reconnaître la contribution de <b id='cv'>LIENHART MICHAEL</b> dans toutes publication ou présentation liée au projet.
                    </p>
                    <br />
                    <li>Confidentialité et propriété</li>
                    <p>
                        Les codes, prototypes, ou documents produits restent la propriété de leur auteur, sauf accord écrit contraire.
                        <br>
                        Toute collaboration repose sur le respect mutuel des droits de chacun.
                    </p>
                    <br>
                    <li>Ethique et transparence</li>
                    <p>Aucun projet ne sera accepté s'il implique une activité contraire à la loi, à l'éthique ou au respect de la vie privée.</p>
                </ol>
            `;
            break;
        case 4:
            chart = `
                <h2>Mentions sur le droit d'auteur</h2>
                <ol>
                    <li>Propriété intellectuelle</li>
                    <p>
                        Tout le contenu publié sur le site (textes, images, codes, projets, idées, vidéos, schémas, etc, etc.) est protégé par le 
                        <b>Code de la Propriété Intellectuelle</b>
                        .
                        <br>
                        Il appartient exclusivement à 
                        <b id='cv'>LIENHART MICHAEL</b>
                        , sauf mention explicite d'une source externe.
                    </p>
                    <li>Licence d'utilisation</li>
                    <p>
                        Sauf indication contraire, les contenus peuvent être partagés à des fins 
                        <b>non commerciales</b>
                         à condition de citer clairement l'auteur et la source du site.
                    </p>
                    <li>Interdictions</li>
                    <p>Toutes reproduction, modification, diffusion ou utilisation commerciale du contenu sans autorisation préalable est strictement interdite.</p>
                    <li>Signalement de violation</li>
                    <p>
                        Toutes personne estimant qu'un contenu du site viole ses droits d'auteur peut en faire la demande de retrait via le 
                        <i id='form'>formulaire de contact</i>
                        .
                    </p>
                </ol>
            `;
            break;
        case 5:
            chart = `
                <div class="container bordereau">
                    <div class="icon">&#128679;</div> <!-- Icône de construction -->
                    <h2>Page en construction</h2>
                    <p>Nous travaillons dur pour rendre cette page disponible bientôt.</p>
                    <div class="message">Merci de votre patience !</div>
                </div>
            `;
    }
    main.innerHTML = chart;
}

function page(x) {
    var page = '';
    var main = document.getElementById('content');
    switch (x) {
        case 1:
            page = `
                <h2><u>Présentation</u></h2>
                <p>
                    Je m’appelle 
                    <b>Michaël Lienhart</b>
                    , développeur et passionné de technologies, avec un attrait particulier pour les systèmes concrets, utiles et maîtrisés de bout en bout.
                </p>
                <br>
                <p>
                    Mon parcours s’est construit à la croisée du 
                    <b>développement logiciel</b>
                    , de l’
                    <b>électronique</b>
                    , des 
                    <b>systèmes embarqués</b>
                     et des 
                     <b>réseaux</b>
                     . J’aime comprendre comment les choses fonctionnent réellement : du code qui s’exécute, au matériel qui réagit, jusqu’à l’utilisateur final. Cette approche m’a naturellement conduit à travailler sur des projets très variés, allant d’applications logicielles à des dispositifs physiques intégrant caméras, capteurs, impression, interfaces graphiques ou automatisation.
                </p>
                <br>
                <p>
                    Je m’intéresse particulièrement aux projets où la technique sert un 
                    <b>objectif concret</b>
                     : événementiel, médiation, mémoire, innovation locale ou industrielle. Le projet de photobooth que je développe actuellement en est un bon exemple : un système autonome, robuste, pensé pour fonctionner dans le monde réel, sans dépendre de solutions opaques ou surdimensionnées.
                </p>
                <br>
                <p>Sur ce blog, je partage :</p>
                <ul>
                    <li>des retours d’expérience techniques,</li>
                    <li>des réflexions sur la conception logicielle et système,</li>
                    <li>des projets en cours ou aboutis,</li>
                    <li>et parfois des points de vue plus personnels sur la technologie, son usage et son sens.</li>
                </ul>
                <br>
                <p>
                    Ce blog n’a pas vocation à donner des leçons, mais à 
                    <b>documenter</b>
                    , 
                    <b>transmettre</b>
                     et 
                    <b>échanger</b>
                    . Si certains contenus peuvent être utiles, inspirants ou simplement clairs pour d’autres, alors l’objectif est atteint.
                </p>
                <br />
                <p>Bonne lecture.</p>
            `;
            break;
        case 2:
            page = `
                <h2>Parcours</h2>
                <p>M'étant formé dans le domaine du numérique et de l’informatique, avec un parcours orienté vers le développement logiciel, les systèmes, les réseaux et la cybersécurité.</p>
                <p>J'ai suivi le parcours Graduate – Technicien supérieur systèmes, réseaux et cybersécurité au sein de Studi Formation, me permettant de consolider des compétences en administration système, réseaux, sécurité informatique et bonnes pratiques professionnelles dans un environnement structuré.</p>
                <p>
                    Son parcours académique s’inscrit dans une progression cohérente au sein des métiers de l’informatique, avec une spécialisation en 
                    <b>conception, développement et tests de logiciels</b>
                    . Il a suivi sa formation à l’
                    <b>UHA 4.0 – Université de Haute-Alsace (Mulhouse)</b>
                    , où il a acquis des bases solides en programmation, développement web, architecture du web et technologies modernes, dans un cadre pédagogique s’appuyant sur la 
                    <b>méthodologie Agile</b>
                     et le 
                     <b>framework Scrum</b>
                     .
                </p>
                <p>Il dispose de compétences techniques étendues, couvrant :</p>
                <ul>
                    <li>les langages de programmation : HTML, CSS, JavaScript, PHP, SQL, Java (notions),</li>
                    <li>les frameworks et outils : React, Next.js, Svelte, WordPress, Symfony, Spring,</li>
                    <li>les environnements et outils professionnels : Linux, Git, Docker,</li>
                    <li>la gestion de projet et le travail collaboratif : Jira, Confluence, Slack, Jitsi,</li>
                    <li>ainsi que plusieurs certifications (Pix, bases Java, bases de données, architecture du web, développement côté client).</li>
                </ul>
                <p>Ses expériences professionnelles dans le numérique incluent des stages en développement web et en transformation numérique, au cours desquels il a participé à la création de sites web, au développement de fonctionnalités, à l’amélioration de l’expérience utilisateur et à la collaboration avec des équipes pédagogiques et techniques.</p>
                <p>Il a conduit et développé de nombreux projets numériques concrets, tels que des applications de gestion (devis/facturation, questionnaires, audits, tournois sportifs), des outils métiers, ainsi que des sites web fonctionnels, démontrant sa capacité à concevoir, développer et mettre en œuvre des solutions adaptées aux besoins réels.</p>
                <p>Son profil se distingue par une forte polyvalence, une approche structurée, une capacité d’adaptation, et une volonté d’évoluer dans les métiers de l’informatique et du numérique.</p>
            `;
            break;
        case 3:
            page = `
                <h2>
                    <u>Projets</u>
                </h2>
                <div class="text"></div>
                <p>D'autres petits travaux ont été rendu pour des associations ou entreprise comme :</p>
                <ul>
                    <li>Questionnaire - Association Caritas - Docker,HTML,CSS,JS,PHP,SQL</li>
                    <li>CRM - Design Concept - Docker,HTML,CSS,JS,REACT,Svelt,C++,SQL</li>
                    <li>Suivi Evenement Sportif - Hopla Cup - Wordparess,HTML,CSS,JS,PHP,SQL</li>
                    <li>Gestion locative - Cavalons - HTML,CSS,JS,Go,PostgreSQL</li>
                    <li>Gestion administrative - Génération Mouvement 68 - HTML,CSS,JS</li>
                    <li>Gamification - EasyBetMe - Docker,HTML,CSS,JS,PHP,SQL</li>
                    <li>Gestion locative - InsoliteSPA68 - HTML,CSS,JS,PHP</li>
                </ul>
                <p>Puis des projet personnel comme :</p>
                <ul>
                    <li>Website : Délices de nos rivières - HTML,CSS,JS</li>
                    <li>Website : BasketBall - HTML,CSS,JS,REACT,PHP,SQL</li>
                    <li>Jeu : MasterMind - Java Spring Boot, H2O</li>
                    <li>Cloud : BlocNote - HTML,CSS,JS,REACT,MongoDB</li>
                    <li>Jeu : Survivor - HTML,CSS,JS</li>
                    <li>Mini diapo auto de pésentation : Epicur Persolo - HTML,CSS,JS</li>
                </ul>
                <p>Des projets FabLab' au Technistub :</p>
                <ul>
                    <li>Régie Makerfight</li>
                    <li>PhotoBooth</li>
                    <li>Makerfight</li>
                </ul>
            `;
            break;
        case 4:
            page = `
                <h2>Contact</h2>
                <section class='contact'>
                    <h2>Contactez-moi !</h2>
                    <div>
                        <p>N'hésitez pas et prenez contact avec moi pour entreprendre un projet ou pour vous aider dans votre réalisation.</p>
                    </div>
                    <br />
                    <div>
                        <form id='form'>
                            <div class='form'>
                                <div class='field'>
                                    <label for='from_name'>Votre nom:</label>
                                    <input type='text' name='user_name' id='from_name'>
                                </div>
                                <br />
                                <div class='field'>
                                    <label for='user_objet'>Objet:</label>
                                    <input type='text' name='objet' id='user_objet'>
                                </div>
                                <br />
                                <div class='field'>
                                    <label for='message'>Message:</label>
                                    <br />
                                    <br />
                                    <textarea type='text' name='message' id='message' rows='10' cols='100'></textarea>
                                </div>
                                <br />
                                <div class='field'>
                                    <label for='user_email'>Votre email:</label>
                                    <input type='text' name='user_email' id='user_email'>
                                </div>
                            </div>
                            <div class='submit'>
                                <input type='submit' id='button' value='Envoyer le courriel' >
                            </div>
                        </form>
                    </div>
                    <div class="space"></div>
                    <hr>
                    <div class="space"></div>
                    <h2>Supportez-moi !</h2>
                    <figure class="box">
                        <img src='http://localhost/Website/website_1/image/buymeacoffee.png' alt='buymeacoffee' width='400'>
                        <figcaption>
                            <a href="https://www.buymeacoffee.com/ewzwS4LfCh" target="_blank">
                                <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 200px !important;">
                            </a>
                        </figcaption>
                    </figure>
                    <p class="message">
                        Ce site est développé de manière indépendante.
                        <br />
                        <br />
                        Si mon travail vous est utile, vous pouvez me soutenir en m’offrant un café ☕
                        <br />
                        <br />
                        Votre contribution m’aide à continuer à créer et à améliorer mes projets.
                        <br />
                        <br />
                        <br />
                        Merci pour votre confiance et votre soutien !
                    </p>
                </section>
            `;
            break;
    }
    main.innerHTML = page;

    if (x === 4) {
        const form = document.getElementById('form');
        const btn = document.getElementById('button');

        form.addEventListener('submit', function (event) {
            event.preventDefault();

            btn.value = 'Sending...';

            const serviceID = 'service_f67zgrl';
            const templateID = 'template_0i70oag';

            emailjs.sendForm(serviceID, templateID, this).then(() => {
                btn.value = 'Send Email';
                alert('Le message est envoyé');
            }, (err) => {
                btn.value = 'Send Email';
                alert(JSON.stringify(err));
            });
        });
    }
}

// Affiche footer
function footer() {
    return `
        <footer>
            <nav class="chart">
                <nav id="chart-0">Mentions légales</nav>
                <nav id="chart-1">Politique de confidentialité</nav>
                <nav id="chart-2">Conditions d'utilisation</nav>
                <nav id="chart-3">Charte partenariat</nav>
                <nav id="chart-4">Droit d'auteur</nav>
            </nav>
            <h5 id="chart-5">LIENHART MICHAËL - 2025 LM &copy; - Validations</h5>
        </footer>
    `;
}

// Affiche section
function main() {
    return `
        <div id="content">
            ${logo(10)}
        </div>
    `;
}

/* FIN DE SCRIPT */
