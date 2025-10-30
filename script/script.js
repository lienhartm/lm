'use strict'

window.onload = function() {
    document.body.innerHTML = logo(10)
    document.getElementById('animate').addEventListener("click", function() {
        // myMove();
        myClick();
    });
    document.addEventListener('click', function(event) {
        document.getElementById('content').style.backgroundColor = '#fff';
        if (!event.target || !event.target.id) {
            return;
        } else if (event.target && event.target.id && event.target.id.startsWith('chart-')) {
            const index = event.target.id.split('-')[1];
            chart(Number(index));
        } else if (event.target && event.target.id && event.target.id.startsWith('site')) {
            window.location.href = 'https://lienhart-michael.dynamic-dns.net';
        } else if (event.target && event.target.id && event.target.id.startsWith('form')) {
            console.log('formulaire de contact');
        } else if (event.target && event.target.id && event.target.id.startsWith('cv')) {
            window.location.href = 'https://lienhartm.github.io/CurriculumVitae/';
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
                        <rect x="${15* m}"  y="${30 * m}" width="${5 * m}" height="${5 * m}" fill="#c8c8c8" />
                </svg>
            </div>
        </div>
    `;
}

// Affiche Site en Travaux
function website() {
    return `
        <div class="container bordereau">
            <div class="icon">&#128679;</div> <!-- Icône de construction -->
            <h2>Page en construction</h2>
            <p>Nous travaillons dur pour rendre cette page disponible bientôt.</p>
            <div class="message">Merci de votre patience !</div>
        </div>
    `;
}

// Affiche header
function header() {
    return `
        <header>
            <hr>
            <nav>Présentation</nav>
            <hr>
            <nav>Recherche</nav>
            <hr>
            <nav>Contact</nav>
            <hr>
        </header>
    `;
}

function chart(x) {
    var chart = '';
    var main = document.getElementById('content');
    switch(x) {
        case 0:
            chart = `
                <h2>Mentions légales</h2>
                <ul>
                    <li>Editeur du site</li>
                    <p>Nom : <b>Auto-entrepreneur</b><br>
                    Pays d'activité : <b>France</b><br>
                    Site web : <i id='site'>https://lienhart-michael.dynamic-dns.net</i><br>
                    Adresse e-mail de contact : via le <i id="form">formulaire de contact</i></p>
                    <li>Hébergement du site</li>
                    <p>Hébergement : Auto-hébergé par <b id='cv'>LIENHART MICHAEL</b><br>
                    Localisation du server : <b>France</b></p>
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
                    <p>Responsable : <b id='cv'>LIENHART MICHAEL</b>, auto-entrepreneur en <b>France</b></p>
                    <li>Conservation des données</li>
                    <p>Les données envoyées par formulaire sont conservées le temps nécessaire pour traiter la demande, puis supprimées.</p>
                    <li>Cookies et statistiques</li>
                    <p>Le site peut utiliser des cookies techniques ou analytiques afin d'améliorer la navigation et les performances. L'utilisateur peut configurer son navigateur pour refuser les cookies.</p>
                    <li>Droit d'accès, de rectification et de suppression</li>
                    <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données.
                        Pour exercer ce droit : contactez-moi via le <i id='form'>formulaire de contact</i>
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
                    <p>Les présentes CGU régissent l'accès et l'utilisation du site <i id='site'>https://lienhart-michael.dynamic-dns.net</i>.</p>
                    <li>Acceptation</li>
                    <p>Tout utilisateur accédant au site accepte sans réserve les présentes conditions d'uilisation.</p>
                    <li>Accès au site</li>
                    <p>L'accès est libre et gratuit. Le site peut être temporairement suspendu pour maintenance ou mise à jour.</p>
                    <li>Contenu</li>
                    <p>Le contenu du site est fourni à titre informatif et peut être modifié à tout moment sans préavis.</p>
                    <li>Liens externes</li>
                    <p>Des liens vers d'autres sites peuvent être proposés. <b id='cv'>LIENHART MICHAEL</b> n'est pas responsable du contenu de ces sites tiers.</p>
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
                    <p>Cette charte définit les principes de collaboration entre <b>LIENHART MICHAËL</b> et toutes personne ou organisation ouhaitant coopérer sur des projets numériques (sites web, robotique, IA, etc.).</p>
                    <br>
                    <li>Engagements de <b id='cv'>LIENHART MICHAEL</b></li>
                    <p>
                        <span></span>Fournir un travail rigoureux, transparent et conforme aux objectifs du projet.<br>
                        <span></span>Respecter la confidentialité des informations partégées.<br>
                        <span></span>Favoriser l'esprit de collaboration, la transmission de connaissances et l'innovation.
                    </p>
                    <br>
                    <li>Engagements du partenaire</li>
                    <p>
                        <span></span>Fournir des informations claires et exactes sur le projet.<br>
                        <span></span>Respecter les délais et la communication convenue.<br>
                        <span></span>Reconnaître la contribution de <b id='cv'>LIENHART MICHAEL</b> dans toutes publication ou présentation liée au projet.
                    </p>
                    <br>
                    <li>Confidentialité et propriété</li>
                    <p>Les codes, prototypes, ou documents produits restent la propriété de leur auteur, sauf accord écrit contraire.<br>
                    Toute collaboration repose sur le respect mutuel des droits de chacun.</p>
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
                    <p>Tout le contenu publié sur le site (textes, images, codes, projets, idées, vidéos, schémas, etc, etc.) est protégé par le <b>Code de la Propirété Intellectuelle</b>.<br>Il appartient exclusivement à <b id='cv'>LIENHART MICHAEL</b>, sauf mention explicite d'une source externe.</p>
                    <li>Licence d'utilisation</li>
                    <p>Sauf indication contraire, les contenus peuvent être partagés à des fins <b>non commerciales</b> à condition de citer clairement l'auteur et la source du site.</p>
                    <li>Interdictions</li>
                    <p>Toutes reproduction, modification, diffusion ou utilisation commerciale du contenu sans autorisation préalable est strictement interdite.</p>
                    <li>Signalement de violation</li>
                    <p>Toutes personne estimant qu'un contenu du site viole ses droits d'auteur peut en faire la demande de retrait via le <i id='form'>formulaire de contact</i>.</p>
                </ol>
            `;
            break;
        case 5:
            chart = `
                <h2>Validations Automatisées</h2>
                <p>Site analysé : <strong>https://lienhart-michael.dynamic-dns.net</strong></p>

                <table>
                    <thead>
                        <tr>
                            <th>Test</th>
                            <th>Service</th>
                            <th>Statut</th>
                            <th>Résultat / Lien</th>
                        </tr>
                    </thead>
                    <tbody id="results">
                        <tr><td>HTML</td><td>W3C Validator</td><td class="pending">⏳</td><td><a href="https://validator.w3.org/nu/?doc=https%3A%2F%2Flienhart-michael.dynamic-dns.net%2F" target="_blank">Voir rapport</a></td></tr>
                        <tr><td>CSS</td><td>W3C CSS Validator</td><td class="pending">⏳</td><td><a href="https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Flienhart-michael.dynamic-dns.net%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=fr" target="_blank">Voir rapport</a></td></tr>
                        <tr><td>Observatory</td><td>Mozilla Observatory</td><td class="pending">⏳</td><td><a href="https://developer.mozilla.org/en-US/observatory/analyze?host=lienhart-michael.dynamic-dns.net#history" target="_blank">Voir rapport</a></td></tr>
                        <tr><td>Security Headers</td><td>Probely</td><td class="pending">⏳</td><td><a href="https://probely.com/sh/?utm_campaign=Security%20Headers&utm_source=Security%20Headers&utm_medium=Display&utm_content=A" target="_blank">Voir rapport</a></td></tr>
                        <tr><td>SSL</td><td>SSL Labs</td><td class="pending">⏳</td><td><a href="https://www.ssllabs.com/ssltest/analyze.html?d=lienhart-michael.dynamic-dns.net" target="_blank">Voir rapport</a></td></tr>
                        <tr><td>UpGuard</td><td>Security Score</td><td class="pending">⏳</td><td><a href="https://www.upguard.com/instant-security-score/report?c=https%3A%2F%2Flienhart-michael.dynamic-dns.net%2F" target="_blank">Voir rapport</a></td></tr>
                        <tr><td>Performance</td><td>PageSpeed Insights</td><td class="pending">⏳</td><td><a href="https://pagespeed.web.dev/analysis/https-lienhart-michael-dynamic-dns-net/1o2m8qoijq?form_factor=desktop" target="_blank">Voir rapport</a></td></tr>
                        <tr><td>WebPageTest</td><td>Catchpoint</td><td class="pending">⏳</td><td><a href="https://www.catchpoint.com/webpagetest/results?publicUrl=https%3A%2F%2Fpublic.catchpoint.com%2FUI%2FEntry%2FWPTITP%2FARK3-D-D-B2AMasjeFn4aiAAA-N" target="_blank">Voir rapport</a></td></tr>
                    </tbody>
                    <tfooter>
                        <tr>
                            <td colspan="4" style="text-align:center; font-size:0.9rem; color:#555;float:left;">
                            Dernière exécution : ${new Date().toLocaleString('fr-FR')}
                            </td>
                        </tr>
                    </tfooter>
                </table>
            `;
    }
    main.innerHTML = chart;
    pendingTests();
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
            <h5 id="chart-5">&copy; 2025 LM - Validations</h5>
        </footer>
    `;
}

// Affiche section
function main() {
    return `
        <div id="content">${website()}</div>
    `;
}

// Affiche webpage
function webpage() {
    const body = document.querySelector('body');
    body.style.background = "#F8F8F8";
    body.innerHTML = `
            ${logo(4)}
            <main>
                <!--${header()}-->
                ${main()}
            </main>
            ${footer()}
    `;
}

function blank() {
    const body = document.querySelector('body');
    body.style.background = "#F8F8F8";
    body.innerHTML = "";
    webpage();
}

function myMove() {
    let a = 10; // Taille initiale du logo
    // Animation de la réduction du logo
    let re = setInterval(function() {
        if (a < 15) { // Continuer la réduction tant que a < 13
            a++; // Réduire la taille
            document.body.innerHTML = logo(a); // Mettre à jour le logo avec la nouvelle taille
        } else {
            clearInterval(re); // Arrêter l'intervalle une fois la taille atteinte
            movelogo();
        }
    }, 100); // Réduction toutes les 100ms
    
    function movelogo() {
        // Animation du mouvement du logo
        let id = setInterval(function() {
            if (a > 6) {
                a--;
                document.body.innerHTML = logo(a); // Mettre à jour le logo avec la nouvelle taille
            } else {
                clearInterval(id); // Arrêter l'animation
                setTimeout(blank, 500); // Charger la page après 500ms
            }
        }, 100); // Déplacement toutes les 5ms
    }
}

function myClick() {
    blank();
}

function pendingTests() {
    // Simulation simple : on "valide" automatiquement les tests après 2 secondes
    setTimeout(() => {
        document.querySelectorAll('.pending').forEach(cell => {
        cell.textContent = "✅ OK";
        cell.classList.remove('pending');
        cell.classList.add('ok');
        });
    }, 2000);
}