module.exports = templateData => {
 
  
  // destructure projects and about data from templateData based on their property key names
    const { siteName, siteLink, slogan, benefit, formEmail, emailSubject, emailBody, featureOneIcon, featureOneHeader, featureOneText, featureTwoIcon, featureTwoHeader, featureTwoText, featureThreeIcon, featureThreeHeader, featureThreeText, facebook, instagram, twitter, snapchat, whatsapp, aboutLink, termsLink, privacyLink } = templateData;

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>${siteName} Landing Page</title>
        <!-- Favicon-->
        <link rel="icon" type="image/x-icon" href="assets/img/favicon.ico" />
        <!-- Bootstrap icons-->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css">
        <!-- Google fonts-->
        <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,300italic,400italic,700italic" rel="stylesheet" type="text/css" />
        <!-- Core theme CSS (includes Bootstrap)-->
        <link href="assets/style.css" rel="stylesheet" />
    </head>
    <body>
        <!-- Navigation-->
        <nav class="navbar navbar-light bg-light static-top">
            <div class="container">
                <a class="navbar-brand" href="${siteLink}">${siteName}</a>
                <a class="navbar-text">${slogan}</a>
            </div>
        </nav>
        <!-- Masthead-->
        <header class="masthead">
            <div class="container position-relative">
                <div class="row justify-content-center">
                    <div class="col-xl-6">
                        <div class="text-center text-white">
                            <!-- Page heading-->
                            <h1 class="mb-5">${benefit}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- Icons Grid-->
        <section class="features-icons bg-light text-center">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div class="features-icons-icon d-flex"><i class="${featureOneIcon} m-auto text-primary"></i></div>
                            <h3>${featureOneHeader}</h3>
                            <p class="lead mb-0">${featureOneText}</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div class="features-icons-icon d-flex"><i class="${featureTwoIcon} m-auto text-primary"></i></div>
                            <h3>${featureTwoHeader}</h3>
                            <p class="lead mb-0">${featureTwoText}</p>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                            <div class="features-icons-icon d-flex"><i class="${featureThreeIcon} m-auto text-primary"></i></div>
                            <h3>${featureThreeHeader}</h3>
                            <p class="lead mb-0">${featureThreeText}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Call to Action-->
        <section class="call-to-action text-white text-center" id="signup">
            <div class="container position-relative">
                <div class="row justify-content-center">
                    <div class="col-xl-6">
                        <h2 class="mb-4">Ready to get started? Contact up now!</h2>
                        <form class="form-subscribe" id="subscribeForm" action="mailto:${formEmail}?subject=${emailSubject}&body=${emailBody}" method="POST" enctype="multipart/form-data" name="emailForm">
                            <div class="row">
                                <div class="col">
                                    <input type="email" class="form-control form-control-lg" id="emailAddress" placeholder="Enter Your Email Address" aria-describedby="emailHelp">
                                </div>
                                <div class="col-auto"><button class="btn btn-primary btn-lg" id="submitButton" type="submit">Submit</button></div>
                            </div>
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>

                        </form>
                    </div>
                </div>
            </div>
        </section>
        <!-- Footer-->
        <footer class="footer bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 h-100 text-center text-lg-start my-auto">
                        <ul class="list-inline mb-2">
                            <li class="list-inline-item"><a href="${aboutLink}">About</a></li>
                            <li class="list-inline-item">⋅</li>
                            <li class="list-inline-item"><a href="${termsLink}">Terms of Use</a></li>
                            <li class="list-inline-item">⋅</li>
                            <li class="list-inline-item"><a href="${privacyLink}">Privacy Policy</a></li>
                        </ul>
                        <p class="text-muted small mb-4 mb-lg-0">&copy;
                            <script>
                                document.write(new Date().getFullYear())
                            </script>
                       ${siteName} - All Rights Reserved.</p>
                    </div>
                    <div class="col-lg-6 h-100 text-center text-lg-end my-auto">
                        <ul class="list-inline mb-0">
                            <li class="list-inline-item me-4">
                                <a href="${facebook}"><i class="bi-facebook fs-3"></i></a>
                            </li>
                            <li class="list-inline-item me-4">
                                <a href="${twitter}"><i class="bi-twitter fs-3"></i></a>
                            </li>
                            <li class="list-inline-item me-4">
                                <a href="${instagram}"><i class="bi-instagram fs-3"></i></a>
                            </li>
                            <li class="list-inline-item me-4">
                                <a href=${snapchat}"><i class="bi bi-snapchat fs-3"></i></a>
                            </li>
                            <li class="list-inline-item me-4">
                                <a href="${whatsapp}"><i class="bi bi-whatsapp fs-3"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
         <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous">
        </script>
        <script src="assets/script.js"></script>
    </body>
  </html>
  `;
};