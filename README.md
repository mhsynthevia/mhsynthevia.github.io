<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MH Synthevia</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
        }
        .container {
            width: 80%;
            margin: auto;
            overflow: hidden;
        }
        header {
            background: #333;
            color: #fff;
            padding: 10px 0;
            border-bottom: #77c7ff 3px solid;
        }
        header a {
            color: #fff;
            text-decoration: none;
            text-transform: uppercase;
            font-size: 16px;
        }
        header ul {
            padding: 0;
            list-style: none;
        }
        header li {
            display: inline;
            padding: 0 10px;
        }
        main {
            padding: 20px 0;
        }
        section {
            margin: 20px 0;
        }
        .services, .testimonials, .contact-info {
            background: #f4f4f4;
            padding: 20px;
            margin: 20px 0;
        }
        footer {
            background: #333;
            color: #fff;
            text-align: center;
            padding: 10px 0;
            margin-top: 20px;
        }
        form label {
            display: block;
            margin: 10px 0 5px;
        }
        form input, form textarea, form button {
            width: 100%;
            padding: 10px;
            margin-bottom: 10px;
        }
        form button {
            background: #77c7ff;
            color: #fff;
            border: none;
            cursor: pointer;
        }
        form button:hover {
            background: #333;
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <h1>MH Synthevia</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Testimonials</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
    <main class="container">
        <section>
            <h2>Welcome to MH Synthevia</h2>
            <p>Your one-stop solution for all IT needs.</p>
        </section>
        <section>
            <h2>About Us</h2>
            <p>MH Synthevia is dedicated to providing top-notch IT services and solutions. Our team of experts is here to help you with all your IT requirements.</p>
        </section>
        <section class="services">
            <h2>Our Services</h2>
            <ul>
                <li>IT Consulting</li>
                <li>Software Development</li>
                <li>Network Solutions</li>
                <li>Technical Support</li>
            </ul>
        </section>
        <section class="testimonials">
            <h2>Testimonials</h2>
            <p>"MH Synthevia transformed our IT infrastructure and boosted our productivity. Highly recommend!" - Client A</p>
            <p>"Excellent service and support. Our go-to IT partner!" - Client B</p>
        </section>
        <section class="contact-info">
            <h2>Contact Us</h2>
            <form id="contact-form">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">Submit</button>
            </form>
        </section>
        <section class="contact-info">
            <h2>Company Info</h2>
            <p>Email: info@mhsynthevia.com</p>
            <p>Contact Number: +1-332-288-1844</p>
            <p>Website: mhsynthevia.com</p>
            <p>Company Address: Office Court Building 228, Oud Maitha road
​Oud Metha, Bur Dubai, Dubai, United Arab Emirates</p>
            <p>Company: Information Technology Company</p>
        </section>
    </main>
    <footer>
        <p>© 2025 MH Synthevia. All rights reserved.</p>
    </footer>
    <script>
        document.getElementById('contact-form').addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for contacting us, ' + document.getElementById('name').value + '!');
        });
    </script>
</body>
</html>
