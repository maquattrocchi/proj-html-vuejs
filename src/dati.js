const dati = {
    datiHeader: [
        {
            icon: require("./assets/images/headerImg/home.png"),
            iconSelect: require("./assets/images/headerImg/home-2.png"),
            nome: 'Home',
            link: '#',
            active: false,
            list: ['Home Style I','Home Style II','Home Style III','Home Style IV','Home - Scrolling Page']
        },
        {
            icon: require("./assets/images/headerImg/document.png"),
            iconSelect: require("./assets/images/headerImg/document-2.png"),
            nome: 'Pages',
            link: '#',
            active: false,
            list:['About us I', 'About us II', 'Our Services I', 'Our Services II', 'Page Right Sidebar', 'Page Left Sidebar'],
        },
        {
            icon: require("./assets/images/headerImg/printer.png"),
            iconSelect: require("./assets/images/headerImg/printer-2.png"),
            nome: 'Blog',
            link: '#',
            active: false,
            list: ['Blog Full Width','Blog Right SSidebar', 'Blog Left Sidebar', 'Post Full Width', 'Post Right Sidebar', 'Post Left Sidebar']
        },
        {
            icon: require("./assets/images/headerImg/cart.png"),
            iconSelect: require("./assets/images/headerImg/cart-2.png"),
            nome: 'Shop',
            link: '#',
            active: false,
            list: ['Cart', 'Products', 'My account', 'List Of WooCommerce Widgets']
        },
        {
            icon: require("./assets/images/headerImg/lab.png"),
            iconSelect: require("./assets/images/headerImg/lab-2.png"),
            nome: 'Shortcodes',
            link: '#',
            active: false,
            list: ['Accordion', 'Audio', 'Background Video', 'Call To Action', 'Class', 'Contact Form','counter List']
        },
        {
            icon: require("./assets/images/headerImg/chat.png"),
            iconSelect: require("./assets/images/headerImg/chat-2.png"),
            nome: 'Support',
            link: '#',
            active: false,
            list: ['Support I', 'Support II']
        },
        {
            icon: require("./assets/images/headerImg/envelope.png"),
            iconSelect: require("./assets/images/headerImg/envelope-2.png"),
            nome: 'Contact',
            link: '#',
            active: false,
            list: ['Contact Us I', 'Contact Us II']
        },
    ],
    datiWelcome: [
        {
            icon: require("./assets/images/mainImg/schoolbag_alt.png"),
            title: 'Morbi Etos',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit officiis, voluptates a minima cum omnis voluptas quaerat vitae fugiat. Porro.',
            blueBg: false,
        },
        {
            icon: require("./assets/images/mainImg/stroller_alt.png"),
            title: 'Congue Gravida',
            text: 'Ullam unde necessitatibus ipsa inventore nisi aspernatur exercitationem a totam et. Quod perferendis.',
            blueBg: true,
        },
        {
            icon: require("./assets/images/mainImg/globe_alt.png"),
            title: 'Maecenas Node',
            text: 'Ab officiis temporibus molestias ea, inventore laboriosam sapiente amet dolor est praesentium dolores. Ut minima veniam recusandae amet.',
            blueBg: false,
        },
        {
            icon: require("./assets/images/mainImg/bell_alt.png"),
            title: 'Praesent Morbi',
            text: ' Illo, debitis amet consectetur adipisicing elit. Aperiam dicta modi, velit vel earum iste deserunt ad, maxime culpa mollitia soluta est.',
            blueBg: true,
        },
    ],
    datiSlider: [ 
        {
            img: require("./assets/images/mainImg/slider_01.jpg"), 
            active: false,
        },
        {
            img: require("./assets/images/mainImg/slider_02.jpg"),
            active: false,
        },
        {
            img: require("./assets/images/mainImg/slider_03.jpg"),
            active: true,
        }
    ],
    datiClassCard: [
        {
            title: 'Little Lambs',
            age: '12-24',
            type: 'Month olds',
            class: '9',
            img: require('./assets/images/mainImg/class_01.jpg'),
        },
        {
            title: 'Bouncy Bears',
            age: '2-3',
            type: 'Years olds',
            class: '12',
            img: require('./assets/images/mainImg/class_02.jpg'),
        },
        {
            title: 'Tenderhearts',
            age: '3-4',
            type: 'Years olds',
            class: '15',
            img: require('./assets/images/mainImg/class_03.jpg'),
        },
        {
            title: 'Shining Stars',
            age: '4-5',
            type: 'Years olds',
            class: '20',
            img: require('./assets/images/mainImg/class_04.jpg'),
        },
    ],
    datiCardEducation: [
        {
            icon: require('./assets/images/mainImg/fifthSec_01.png'),
            title: 'Learning & Fun',
            text: 'Praesent modea est gravida node vehicula luctus.',
        },
        {
            icon: require('./assets/images/mainImg/fifthSec_02.png'),
            title: 'Healthy Meals',
            text: 'Terminal interdum a eleifend maecenas est morbi.',
        },
        {
            icon: require('./assets/images/mainImg/fifthSec_03.png'),
            title: 'Friendly Place',
            text: 'Terminal interdum a eleifend maecenas est morbi.',
        },
        {
            icon: require('./assets/images/mainImg/fifthSec_04.png'),
            title: 'Children Safety',
            text: 'Praesent modea est gravida node vehicula luctus.',
        },
    ],
    datiCarousel:[
        {
            text: 'Fable Kindergarten is a great place for my daughter to start her schooling experience. It’s welcoming and safe and my daughter loves being there.',
            author: 'Matthew D. Campbell',
        },
        {
            text: 'I have a 1 year old and a 5 year old who have been attending for a yaer now. I can not tell you how much I adore and appreciate all of the wonderful staff',
            author: 'Kenneth M. Garcia',
        },
        {
            text: 'I have to say that I have 2 children ages 5 and 2 and have used various daycare in Kindergartens and this is by far the very best I have ever used.',
            author: 'Cecil J. Kirk',
        },
        {
            text: 'Fable Kindergarten is a great place for my daughter to start her schooling experience. It’s welcoming and safe and my daughter loves being there.',
            author: 'Joe R. Hamblen',
        },
        {
            text: 'This letter is to recognize your staff for doing an excellent job teaching my son. His skill level is significantly better since attending Fable.',
            author: 'Tony L. Robinette',
        },
        {
            text: 'I have to say that I have 2 children ages 5 and 2 and have used various daycare in Kindergartens and this is by far the very best I have ever used.',
            author: 'Emma E. Shook',
        },
    ],
    datiNewCard: [
        {
            data: 'October 03, 2014',
            number: '42',
            img: require('./assets/images/mainImg/new_card_01.jpg'),
            imgFoot:  require('./assets/images/footerImg/footer_01.jpg'),
            title: 'Drawing and Painting Lessons',
            text: 'Magna est consectetur interdum modest dictum. Curabitur est faucibus, malesuada esttincidunt etos et mauris, nunc a libero govum est cuprum',
            author: 'Anna Brown',
            category: 'Events, Fun',
        },
        {
            data: 'October 03, 2014',
            number: '19',
            img: require('./assets/images/mainImg/new_card_02.jpg'),
            imgFoot:  require('./assets/images/footerImg/footer_02.jpg'),
            title: 'Fall Parents Meeting Day',
            text: 'Magna est consectetur interdum modest dictum. Curabitur est faucibus, malesuada esttincidunt etos et mauris, nunc a libero govum est cuprum',
            author: 'Anna Brown',
            category: 'Dance, Education',
        },
        {
            data: 'September 20, 2014',
            number: '22',
            img: require('./assets/images/mainImg/new_card_03.jpg'),
            imgFoot:  require('./assets/images/footerImg/footer_03.jpg'),
            title: 'Birthday in Kindergarten',
            text: 'Magna est consectetur interdum modest dictum. Curabitur est faucibus, malesuada esttincidunt etos et mauris, nunc a libero govum est cuprum',
            author: 'Anna Brown',
            category: 'Games, General',
        },
    ],
    datiContact: [
        {
            icon: require('./assets/images/mainImg/contact_01.png'),
            title: 'Postal Address',
            text1: 'Fable Care Center',
            text2: '85 Fentiman Ave',
            text3: 'Ottawa, ON K1S 0T7',
        },
        {
            icon: require('./assets/images/mainImg/contact_02.png'),
            title: 'Phone & E-mail',
            text1: 'Phone: 1-800-64-38',
            text2: 'Fax: 1-800-64-39',
            text3: 'office@fable.com',
        },
        {
            icon: require('./assets/images/mainImg/contact_03.png'),
            title: 'Business Hours',
            text1: 'Monday - Friday',
            text2: '8.00 am - 5.00 pm',
            text3: 'Weekend Closed',
        },
        {
            icon: require('./assets/images/mainImg/contact_04.png'),
            title: 'Sessions',
            text1: 'Mornings, 8 am - 12 noon',
            text2: 'Afternoons, 1 pm - 5 pm',
            text3: 'Full Day, 8 am - 5 pm',
        },
    ],
    datiFooter:[
        ['October 2014 (2)', 'Semptember 2014 (2)', 'August 2012 (2)', 'July 2014 (2)', 'June 2014 (2)', 'May 2014 (1)'],
        ['Friendly and welcoming place', 'Science and art classes', 'Positive learning environment', 'Educational field trips', 'Writing and reading classes', 'Science and art classes']
    ]
}

export default dati