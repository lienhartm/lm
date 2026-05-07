'use strict'

window.onload = function () {
    document.body.innerHTML = `
        <div id="scene" role="region" aria-label="Scène principale contenant la carte avec le logo">
            <div id="card" role="group" aria-label="Carte affichant le logo">
                ${logo(10)}
            </div>
        </div>
    `;
    document.getElementById('animate').addEventListener("click", function () {
        const body = document.querySelector('body');
        body.style.background = "#F8F8F8";
        body.innerHTML = `
            ${header()}
            <main role="main" aria-label="Contenu principal du site">
                ${main()}
            </main>
            ${footer()}
        `;
    });
    document.addEventListener('click', function (event) {
        const content = document.getElementById('content');
        if (content) {
            content.style.backgroundColor = '#fff';
            content.style.borderRadius = '10px';
        }
        if (!event.target || !event.target.id) {
            return;
        } else if (event.target && event.target.id && event.target.id.startsWith('chart-')) {
            const index = event.target.id.split('-')[1];
            chart(Number(index));
        } else if (event.target && event.target.id && event.target.id.startsWith('page-')) {
            const index = event.target.id.split('-')[1];
            page(Number(index));
        } else if (event.target && event.target.id && event.target.id.startsWith('site')) {
            window.location.href = 'https://github.io/lienhartm/LM/';
        }
    });
};

function logo(m) {
    return `
        <div id="animate" width="${45 * m}" height="${40 * m}" role="region" aria-label="Animation du logo LM">
            <div class="logo" id="logo" width="${45 * m}" height="${40 * m}" role="img" aria-label="Logo LM représentant les lettres L et M avec ponctuation">
                <svg xmlns="http://www.w3.org/2000/svg" width="${45 * m}" height="${40 * m}" viewBox="0 0 ${45 * m} ${40 * m}" fill="none" role="presentation">
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

// Affiche header # Navigation
function header() {
    return `
        <header>
            <hr aria-hidden="true">
        
            <nav id="page-1"
                 role="navigation"
                 aria-label="Aller à la section Présentation"
                 tabindex="0">
                Présentation
            </nav>
        
            <hr aria-hidden="true">
        
            <nav id="page-2"
                 role="navigation"
                 aria-label="Aller à la section Parcours"
                 tabindex="0">
                Parcours
            </nav>
        
            <hr aria-hidden="true">
        
            <nav id="page-3"
                 role="navigation"
                 aria-label="Aller à la section Projets"
                 tabindex="0">
                Projets
            </nav>
        
            <hr aria-hidden="true">
        
            <nav id="page-4"
                 role="navigation"
                 aria-label="Aller à la section Contact"
                 tabindex="0">
                Contact
            </nav>
        
            <hr aria-hidden="true">
        </header>
    `;
}

// Affiche footer # Mentions légales
function chart(x) {
    var chart = '';
    var main = document.getElementById('content');
    switch (x) {
        case 0:
            chart = `
                <h2 id="mentions-title">Mentions légales</h2>
                
                <ul aria-labelledby="mentions-title">
                
                    <li id="editeur">Editeur du site</li>
                    <p aria-labelledby="editeur">
                        Nom : 
                        <b>Auto-entrepreneur</b>
                        <br>
                        Pays d'activité : 
                        <b>France</b>
                        <br>
                        Site web : 
                        <i id="site" aria-label="Adresse du site web">
                            https://lienhartm.github.io/lm/
                        </i>
                        <br>
                        Adresse e-mail de contact : via le 
                        <i id="form" role="link" tabindex="0" aria-label="Accéder au formulaire de contact">
                            formulaire de contact
                        </i>
                    </p>
                
                    <li id="hebergement">Hébergement du site</li>
                    <p aria-labelledby="hebergement">
                        Hébergement : Auto-hébergé par 
                        <b id="cv" aria-label="Nom de l'hébergeur">
                            LIENHART MICHAEL
                        </b><br>
                        Localisation du server : 
                        <b>France</b>
                    </p>
                
                    <li id="responsabilite">Responsabilité</li>
                    <p aria-labelledby="responsabilite">
                        L'éditeur du site met tout en oeuvre pour assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Cependant, il ne saurait être tenu responsable d'erreurs ou d'ommisions, ni des résultats pouvant être obtenus par l'usage de ces informations.
                    </p>
                
                    <li id="propriete">Propriété intellectuelle</li>
                    <p aria-labelledby="propriete">
                        Sauf mention contraire, tous les contenus (textes, images codes, projets, vidéos) présents sur le site sont la propriété exclusive de 
                        <b id="cv">LIENHART MICHAEL</b>. 
                        Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation préalable est interdite.
                    </p>
                
                </ul>
            `;
            break;
        case 1:
            chart = `
                <h2 id="rgpd-title">Politique de confidentialité (RGPD)</h2>
                
                <ol aria-labelledby="rgpd-title">
                
                    <li id="collecte">Collecte des données personnelles</li>
                    <p aria-labelledby="collecte">
                        Les informations collectées via le formulaire de contact (nom, e-mail, message) sont utilisées uniquement pour répondre aux demandes des utilisateurs. 
                        Aucune donnée personnelle n'est transmise à des tiers sans consentement explicite.
                    </p>
                
                    <li id="responsable">Responsable du traitement</li>
                    <p aria-labelledby="responsable">
                        Responsable : 
                        <b id="cv">LIENHART MICHAEL</b>,
                        auto-entrepreneur en 
                        <b>France</b>
                    </p>
                
                    <li id="conservation">Conservation des données</li>
                    <p aria-labelledby="conservation">
                        Les données envoyées par formulaire sont conservées le temps nécessaire pour traiter la demande, puis supprimées.
                    </p>
                
                    <li id="cookies">Cookies et statistiques</li>
                    <p aria-labelledby="cookies">
                        Le site peut utiliser des cookies techniques ou analytiques afin d'améliorer la navigation et les performances. 
                        L'utilisateur peut configurer son navigateur pour refuser les cookies.
                    </p>
                
                    <li id="droits">Droit d'accès, de rectification et de suppression</li>
                    <p aria-labelledby="droits">
                        Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données.
                        Pour exercer ce droit : contactez-moi via le 
                        <i id="form"
                           role="link"
                           tabindex="0"
                           aria-label="Accéder au formulaire de contact">
                           formulaire de contact
                        </i>
                    </p>
                
                    <li id="securite">Sécurité</li>
                    <p aria-labelledby="securite">
                        Le site met en oeuvre des mesures techniques pour protéger les données personnelles contre l'accès non autorisé.
                    </p>
                
                </ol>
            `;
            break;
        case 2:
            chart = `
                <h2 id="cgu-title">Conditions Générales d'Utilisation (CGU)</h2>
                
                <ol aria-labelledby="cgu-title">
                
                    <li id="objet">Objet</li>
                    <p aria-labelledby="objet">
                        Les présentes CGU régissent l'accès et l'utilisation du site 
                        <i id="site" aria-label="Adresse du site web">
                            https://lienhartm.github.io/lm/
                        </i>.
                    </p>
                
                    <li id="acceptation">Acceptation</li>
                    <p aria-labelledby="acceptation">
                        Tout utilisateur accédant au site accepte sans réserve les présentes conditions d'utilisation.
                    </p>
                
                    <li id="acces">Accès au site</li>
                    <p aria-labelledby="acces">
                        L'accès est libre et gratuit. Le site peut être temporairement suspendu pour maintenance ou mise à jour.
                    </p>
                
                    <li id="contenu">Contenu</li>
                    <p aria-labelledby="contenu">
                        Le contenu du site est fourni à titre informatif et peut être modifié à tout moment sans préavis.
                    </p>
                
                    <li id="liens">Liens externes</li>
                    <p aria-labelledby="liens">
                        Des liens vers d'autres sites peuvent être proposés. 
                        <b id="cv">LIENHART MICHAEL</b>
                        n'est pas responsable du contenu de ces sites tiers.
                    </p>
                
                    <li id="propriete">Propriété intellectuelle</li>
                    <p aria-labelledby="propriete">
                        L'ensemble du contenu du site (textes, images, code, logos, etc.) est protégé par le droit d'auteur. 
                        Toute reproduction non autorisée est interdite.
                    </p>
                
                    <li id="responsabilite-user">Responsabilité de l'utilisateur</li>
                    <p aria-labelledby="responsabilite-user">
                        L'utilisateur s'engage à ne pas perturber le bon fonctionnement du site ni tenter d'accéder à des zones non autorisées.
                    </p>
                
                    <li id="droit">Droit applicable</li>
                    <p aria-labelledby="droit">
                        Les présentes CGU sont soumises au droit français.
                    </p>
                
                </ol>
            `;
            break;
        case 3:
            chart = `
                <h2 id="charte-title">Charte de partenariat / collaboration</h2>
                
                <ol aria-labelledby="charte-title">
                
                    <li id="objectif">Objectif de la charte</li>
                    <p aria-labelledby="objectif">
                        Cette charte définit les principes de collaboration entre 
                        <b>LIENHART MICHAËL</b>
                        et toute personne ou organisation souhaitant coopérer sur des projets numériques (sites web, robotique, IA, etc.).
                    </p>
                    <br>
                
                    <li id="engagement-lienhart">
                        Engagements de 
                        <b id="cv">LIENHART MICHAEL</b>
                    </li>
                    <p aria-labelledby="engagement-lienhart">
                        <span></span>Fournir un travail rigoureux, transparent et conforme aux objectifs du projet.
                        <br>
                        <span></span>Respecter la confidentialité des informations partagées.
                        <br>
                        <span></span>Favoriser l'esprit de collaboration, la transmission de connaissances et l'innovation.
                    </p>
                    <br>
                
                    <li id="engagement-partenaire">Engagements du partenaire</li>
                    <p aria-labelledby="engagement-partenaire">
                        <span></span>Fournir des informations claires et exactes sur le projet.
                        <br>
                        <span></span>Respecter les délais et la communication convenue.
                        <br>
                        <span></span>Reconnaître la contribution de <b id="cv">LIENHART MICHAEL</b> dans toute publication ou présentation liée au projet.
                    </p>
                    <br>
                
                    <li id="confidentialite">Confidentialité et propriété</li>
                    <p aria-labelledby="confidentialite">
                        Les codes, prototypes, ou documents produits restent la propriété de leur auteur, sauf accord écrit contraire.
                        <br>
                        Toute collaboration repose sur le respect mutuel des droits de chacun.
                    </p>
                    <br>
                
                    <li id="ethique">Ethique et transparence</li>
                    <p aria-labelledby="ethique">
                        Aucun projet ne sera accepté s'il implique une activité contraire à la loi, à l'éthique ou au respect de la vie privée.
                    </p>
                
                </ol>
            `;
            break;
        case 4:
            chart = `
                <h2 id="droit-title">Mentions sur le droit d'auteur</h2>
                
                <ol aria-labelledby="droit-title">
                
                    <li id="propriete">Propriété intellectuelle</li>
                    <p aria-labelledby="propriete">
                        Tout le contenu publié sur le site (textes, images, codes, projets, idées, vidéos, schémas, etc.) est protégé par le 
                        <b>Code de la Propriété Intellectuelle</b>.
                        <br>
                        Il appartient exclusivement à 
                        <b id="cv">LIENHART MICHAEL</b>, sauf mention explicite d'une source externe.
                    </p>
                
                    <li id="licence">Licence d'utilisation</li>
                    <p aria-labelledby="licence">
                        Sauf indication contraire, les contenus peuvent être partagés à des fins 
                        <b>non commerciales</b> à condition de citer clairement l'auteur et la source du site.
                    </p>
                
                    <li id="interdictions">Interdictions</li>
                    <p aria-labelledby="interdictions">
                        Toute reproduction, modification, diffusion ou utilisation commerciale du contenu sans autorisation préalable est strictement interdite.
                    </p>
                
                    <li id="signalement">Signalement de violation</li>
                    <p aria-labelledby="signalement">
                        Toute personne estimant qu'un contenu du site viole ses droits d'auteur peut en faire la demande de retrait via le 
                        <i id="form" role="link" tabindex="0" aria-label="Accéder au formulaire de contact">
                            formulaire de contact
                        </i>.
                    </p>
                
                </ol>
            `;
            break;
        case 5:
            chart = `
                <div class="container bordereau" role="region" aria-labelledby="construction-title" aria-describedby="construction-message">
                
                    <div class="icon" aria-hidden="true">&#128679;</div> <!-- Icône décorative -->
                
                    <h2 id="construction-title">Page en construction</h2>
                
                    <p>Nous travaillons dur pour rendre cette page disponible bientôt.</p>
                
                    <div class="message" id="construction-message">
                        Merci de votre patience !
                    </div>
                
                </div>
            `;
    }
    main.innerHTML = chart;
}

// Affiche page # Présentation
function page(x) {
    var page = '';
    var main = document.getElementById('content');
    switch (x) {
        case 1:
            page = `
                <h1 id="presentation-title"><u>Présentation</u></h1>

                <br>
                
                <p class="border-left" aria-labelledby="presentation-title">
                    Je m’appelle 
                    <b>Michaël Lienhart</b>,
                    développeur et passionné de technologies, avec un attrait particulier pour les systèmes concrets, utiles et maîtrisés de bout en bout.
                </p>

                <br>

                <img class="left" src="image/coding.png" alt="Icône codage" width="80" aria-hidden="false">

                <br>
                
                <p class="border-right" aria-labelledby="presentation-title">
                    Mon parcours s’est construit à la croisée du 
                    <b>développement logiciel</b>,
                    de l’
                    <b>électronique</b>,
                    des 
                    <b>systèmes embarqués</b> 
                    et des 
                    <b>réseaux</b>.
                    J’aime comprendre comment les choses fonctionnent réellement : du code qui s’exécute, au matériel qui réagit, jusqu’à l’utilisateur final. Cette approche m’a naturellement conduit à travailler sur des projets très variés, allant d’applications logicielles à des dispositifs physiques intégrant caméras, capteurs, impression, interfaces graphiques ou automatisation.
                </p>

                <br>

                <img class="right" src="image/interest.png" alt="Icône centre d’intérêt" width="80" aria-hidden="false">

                <br>
                
                <p class="border-left" aria-labelledby="presentation-title">
                    Je m’intéresse particulièrement aux projets où la technique sert un 
                    <b>objectif concret</b> : événementiel, médiation, mémoire, innovation locale ou industrielle. 
                    Le projet de photobooth que je développe actuellement en est un bon exemple : un système autonome, robuste, pensé pour fonctionner dans le monde réel, sans dépendre de solutions opaques ou surdimensionnées.
                </p>
                
                <br>

                <div class="blog">
                    <p aria-labelledby="presentation-title">Sur ce blog, je partage :</p>
                
                    <ul aria-labelledby="presentation-title">
                        <li>des retours d’expérience techniques,</li>
                        <li>des réflexions sur la conception logicielle et système,</li>
                        <li>des projets en cours ou aboutis,</li>
                        <li>et parfois des points de vue plus personnels sur la technologie, son usage et son sens.</li>
                    </ul>
                </div>
    
                <br>
                
                <p class="border-right" aria-labelledby="presentation-title">
                    Ce blog n’a pas vocation à donner des leçons, mais à 
                    <b>documenter</b>, 
                    <b>transmettre</b> et 
                    <b>échanger</b>. Si certains contenus peuvent être utiles, inspirants ou simplement clairs pour d’autres, alors l’objectif est atteint.
                </p>
                
                <br />
                
                <p aria-labelledby="presentation-title">Bonne lecture.</p>
            `;
            break;
        case 2:
            page = `
                <h1 id="parcours-title">Parcours</h1>

                <br>
                
                <p class="border-left" aria-labelledby="parcours-title">
                    M'étant formé dans le domaine du numérique et de l’informatique, avec un parcours orienté vers le développement logiciel, les systèmes, les réseaux et la cybersécurité.
                </p>

                <br>

                <img class="left" src="image/academy.png" alt="Icône académie" width="80" aria-hidden="false">

                <br>
                
                <p class="border-right" aria-labelledby="parcours-title">
                    J'ai suivi le parcours Graduate – Technicien supérieur systèmes, réseaux et cybersécurité au sein de Studi Formation, me permettant de consolider des compétences en administration système, réseaux, sécurité informatique et bonnes pratiques professionnelles dans un environnement structuré.
                </p>

                <br>

                <img class="right" src="image/roadmap.png" alt="Icône roadmap" width="80" aria-hidden="false">

                <br>
                
                <p class="border-left" aria-labelledby="parcours-title">
                    Mon parcours académique s’inscrit dans une progression cohérente au sein des métiers de l’informatique, avec une spécialisation en 
                    <b>conception, développement et tests de logiciels</b>. J'ai suivi sa formation à l’
                    <b>UHA 4.0 – Université de Haute-Alsace (Mulhouse)</b>, où j'ai acquis des bases solides en programmation, développement web, architecture du web et technologies modernes, dans un cadre pédagogique s’appuyant sur la 
                    <b>méthodologie Agile</b> et le 
                    <b>framework Scrum</b>.
                </p>
                
                <p class="border-right" aria-labelledby="parcours-title">
                    Lors de ma formation en développement web et web mobile à Elan Formation, j’ai suivi un parcours individualisé de trois mois vers les métiers du développement informatique, adapté à mes besoins, qui m’a permis d’acquérir de l’expérience en maquettage, modélisation UML et conception de sites web, tout en me formant et en pratiquant activement le développement web et web mobile.
                </p>

                <div class="blog">
                    <p aria-labelledby="parcours-title">
                        Je dispose de compétences techniques étendues, couvrant :
                    </p>
                
                    <ul aria-labelledby="parcours-title">
                        <li>les langages de programmation : HTML, CSS, JavaScript, PHP, SQL, Java (notions),</li>
                        <li>les frameworks et outils : React, Next.js, Svelte, WordPress, Symfony, Spring,</li>
                        <li>les environnements et outils professionnels : Linux, Git, Docker,</li>
                        <li>la gestion de projet et le travail collaboratif : Jira, Confluence, Slack, Jitsi,</li>
                        <li>ainsi que plusieurs certifications (Pix, bases Java, bases de données, architecture du web, développement côté client).</li>
                    </ul>
                </div>
                
                <br>

                <img class="left" src="image/competence.png" alt="Icône compétence" width="80" aria-hidden="false">

                <br>
                
                <p class="border-left" aria-labelledby="parcours-title">
                    Mes expériences professionnelles dans le numérique incluent des stages en développement web et en transformation numérique, au cours desquels il a participé à la création de sites web, au développement de fonctionnalités, à l’amélioration de l’expérience utilisateur et à la collaboration avec des équipes pédagogiques et techniques.
                </p>

                <br>

                <img class="right" src="image/work.png" alt="Icône travail" width="80" aria-hidden="false">

                <br>
                
                <p class="border-right" aria-labelledby="parcours-title">
                    J'ai pu conduire et développer de nombreux projets numériques concrets, tels que des applications de gestion (devis/facturation, questionnaires, audits, tournois sportifs), des outils métiers, ainsi que des sites web fonctionnels, démontrant sa capacité à concevoir, développer et mettre en œuvre des solutions adaptées aux besoins réels.
                </p>
                
                <p class="border-left" aria-labelledby="parcours-title">
                    Mon profil se distingue par une forte polyvalence, une approche structurée, une capacité d’adaptation, et une volonté d’évoluer dans les métiers de l’informatique et du numérique.
                </p>            `;
            break;
        case 3:
            page = `
                <h1 id="projets-title"><u>Projets</u></h1>

                <br>
                
                <div class="text" aria-hidden="true"></div>

                <div class="blog">
                    <p aria-labelledby="projets-title">
                        D'autres petits travaux ont été rendus pour des associations ou entreprises comme :
                    </p>
                
                    <ul aria-labelledby="projets-title">
                        <li>Questionnaire - Association Caritas - Docker, HTML, CSS, JS, PHP, SQL</li>
                        <li>CRM - Design Concept - Docker, HTML, CSS, JS, REACT, Svelte, C++, SQL</li>
                        <li>Suivi Evenement Sportif - Hopla Cup - WordPress, HTML, CSS, JS, PHP, SQL</li>
                        <li>Gestion locative - Cavalons - HTML, CSS, JS, Go, PostgreSQL</li>
                        <li>Gestion administrative - Génération Mouvement 68 - HTML, CSS, JS</li>
                        <li>Gamification - EasyBetMe - Docker, HTML, CSS, JS, PHP, SQL</li>
                        <li>Gestion locative - InsoliteSPA68 - HTML, CSS, JS, PHP</li>
                    </ul>
                </div>

                <br>
                
                <img src="image/company.png" alt="Icône entreprise" width="80" aria-hidden="false">

                <br>
                
                <div class="blog">
                    <p aria-labelledby="projets-title">
                        Puis des projets personnels comme :
                    </p>
                    
                    <ul aria-labelledby="projets-title">
                        <li>Website : Délices de nos rivières - HTML, CSS, JS</li>
                        <li>Website : BasketBall - HTML, CSS, JS, REACT, PHP, SQL</li>
                        <li>Jeu : MasterMind - Java Spring Boot, H2O</li>
                        <li>Cloud : BlocNote - HTML, CSS, JS, REACT, MongoDB</li>
                        <li>Jeu : Survivor - HTML, CSS, JS</li>
                        <li>Mini diapo auto de présentation : Epicur Persolo - HTML, CSS, JS</li>
                    </ul>
                </div>

                <br>
                
                <img src="image/electronics.png" alt="Icône électronique" width="80" aria-hidden="false">

                <br>

                <div class="blog">
                    <p aria-labelledby="projets-title">
                        Et des projets FabLab' au Technistub :
                    </p>
                    
                    <ul aria-labelledby="projets-title">
                        <li>PhotoBooth</li>
                        <li>Makerfight</li>
                    </ul>
                </div>
            `;
            break;
        case 4:
            page = `
                <h1 id="contact-title">Contact</h1>

                <br>
                
                <section class="contact" role="region" aria-labelledby="contact-title">

                    <h2 id="contact-subtitle">Mon Curriculum Vitae</h2>

                    <br>
                      
                    <div>
                      <p aria-labelledby="contact-subtitle">
                        Electrotechnicien, avec compétences
                        en développement web, gestion de projet, système, réseaux et maintenance informatique.
                      </p>

                      <div class="cv-action">
                          <a href="../image/cv-michael-lienhart.pdf" target="_blank" class="cv-button" aria-label="Voir le curriculum vitae de lienhart michael">
                            Voir le CV
                          </a>
                        
                          <a href="../image/cv-michael-lienhart.pdf" target="_blank" download class="cv-button" aria-label="Télécharger le currculum vitae de lienhart michael">
                            Télécharger mon CV (PDF)
                          </a>
                      </div>
                    </div>

                    <br>
                    <hr>
                    <br>
                
                    <h2 id="contact-subtitle">Contactez-moi !</h2>

                    <br>
                
                    <div>
                        <p aria-labelledby="contact-subtitle">
                            N'hésitez pas et prenez contact avec moi pour entreprendre un projet ou pour vous aider dans votre réalisation.
                        </p>
                    </div>

                    <br />
                
                    <div>
                        <form id="form" aria-labelledby="contact-subtitle" aria-describedby="form-instructions">
                            <div class="form">
                                <div class="field">
                                    <label for="from_name">Votre nom:</label>
                                    <input type="text" name="user_name" id="from_name" aria-required="true">
                                </div>
                                <br />
                                <div class="field">
                                    <label for="user_objet">Objet:</label>
                                    <input type="text" name="objet" id="user_objet" aria-required="true">
                                </div>
                                <br />
                                <div class="field">
                                    <label for="message">Message:</label>
                                    <br /><br />
                                    <textarea name="message" id="message" rows="10" cols="100" aria-required="true"></textarea>
                                </div>
                                <br />
                                <div class="field">
                                    <label for="user_email">Votre email:</label>
                                    <input type="text" name="user_email" id="user_email" aria-required="true">
                                </div>
                            </div>
                            <div class="submit">
                                <input type="submit" id="button" value="Envoyer le courriel" aria-label="Envoyer le formulaire de contact">
                            </div>
                            <br />
                            <p id="form-instructions" class="sr-only">
                                Tous les champs sont obligatoires. Merci de remplir correctement le formulaire avant soumission.
                            </p>
                        </form>
                    </div>
                
                    <br>
                    <hr>
                    <br>
                
                    <div>
                        <h2 id="support-title">Supportez-moi !</h2>

                        <br>
                    
                        <figure class="box" role="group" aria-labelledby="support-title">
                            <img src="https://lienhartm.github.io/lm/image/buymeacoffee.png" alt="Logo Buy Me A Coffee" width="400" aria-hidden="false">
                            <figcaption>
                                <a href="https://www.buymeacoffee.com/ewzwS4LfCh" target="_blank" aria-label="Soutenir l'auteur via Buy Me A Coffee">
                                    <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important; width: 200px !important;">
                                </a>
                            </figcaption>
                        </figure>
                    
                        <p class="message" aria-labelledby="support-title">
                            Ce site est développé de manière indépendante.
                            <br /><br />
                            Si mon travail vous est utile, vous pouvez me soutenir en m’offrant un café ☕
                            <br /><br />
                            Votre contribution m’aide à continuer à créer et à améliorer mes projets.
                            <br /><br /><br />
                            Merci pour votre confiance et votre soutien !
                        </p>
                    </div>
                
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
        <footer role="contentinfo" aria-label="Pied de page principal">
        
            <nav class="chart" role="navigation" aria-label="Liens du footer">
                <nav id="chart-0" role="link" aria-label="Mentions légales">Mentions légales</nav>
                <nav id="chart-1" role="link" aria-label="Politique de confidentialité">Politique de confidentialité</nav>
                <nav id="chart-2" role="link" aria-label="Conditions d'utilisation">Conditions d'utilisation</nav>
                <nav id="chart-3" role="link" aria-label="Charte partenariat">Charte partenariat</nav>
                <nav id="chart-4" role="link" aria-label="Droit d'auteur">Droit d'auteur</nav>
            </nav>
        
            <h5 id="chart-5">
                LIENHART MICHAËL - 2025 LM &copy; - Validations
            </h5>
        
        </footer>
    `;
}

// Affiche section
function main() {
    return `
        <div id="content" role="region" aria-label="Logo principal du site">
            ${logo(10)}
        </div>
    `;
}

/* FIN DE SCRIPT */
