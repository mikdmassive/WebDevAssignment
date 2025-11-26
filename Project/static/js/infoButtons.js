const sectiondiv = document.createElement("div");
sectiondiv.classList.add("section");
const div1 = document.getElementById("section1")

div1.parentElement.insertBefore(sectiondiv, div1.nextSibling);

const insidesec = document.createElement("div");
insidesec.classList.add("insidesection");
sectiondiv.appendChild(insidesec)

//FUNCTIONS
function addtextelement(eletype,txt,parentele)
{
    const textele = document.createElement(eletype)
    textele.textContent = txt
    parentele.appendChild(textele)
    return textele
}
function addelement(parentele,eletype)
{
    const ele = document.createElement(eletype)
    parentele.appendChild(ele)
    return ele
}
function tableinserter(ttle, para, tb) {
    const tr = addelement(tb, "tr")
    addtextelement("td", ttle, tr)
    addtextelement("td", para, tr)
}

function updateinfotext(typee) {
    insidesec.innerHTML = ""
    if (typee == "Staff") {
        addtextelement("h2","Information For Staff",insidesec)
        const tbl = addelement(insidesec,"table")
        function titlethenpara(ttle,para)
        {
            tableinserter(ttle,para,tbl)
        }
        titlethenpara("News","Cantor College recently hosted the Software Engineering student of the year awards. Shortlisted candidates from around the country attended the one day event.")
        titlethenpara("Academic Registry","For academic regulations, assessment, awards, student records and course validation.")
        titlethenpara("Catering Services","Contact the Catering Services regarding on and off-site catering")
        titlethenpara("Financial Services","The financial team based on the 2nd Floor are responsible for all areas of student finance aswell as College budgeting.")
        titlethenpara("Information Systems Services","The ISS team delivers the College’s computing facilities including all hardware and software. They also run the staff helpdesk.")
        titlethenpara("Marketing Services","The Marketing Team will help promote events and new courses. They will help with press release preparation.")
        titlethenpara("Personnel Services","All staff pay and conditions enquiries should be directed to the Personnel Services team on the 3rd floor.")
        titlethenpara("Facilities","The facilities are responsible for the general care and maintenance of the College. All enquiries via the main helpdesk.")
    }
    else if(typee == "Students")
    {
        addtextelement("h2","Information For Students",insidesec)
        addtextelement("h3","Explore Cantor College: World-Class Facilities for Your Success",insidesec)
        addtextelement("p","At Cantor College, we are committed to providing our students with the best possible environment to learn, create, and innovate. Our state-of-the-art facilities are designed to support your academic journey and help you thrive in your chosen field. Whether you’re studying computing, design, or technology, our campus offers everything you need to excel.",insidesec)
        addtextelement("h3","Our Facilities",insidesec)
        const tbl = addelement(insidesec,"table")
        function titlethenpara(ttle,para)
            {
                tableinserter(ttle,para,tbl)
            }
        titlethenpara("Advanced Computing Labs","Our computing labs are equipped with the latest hardware and software, providing you with the tools you need to develop your skills in programming, cybersecurity, data science, and more. The labs are accessible 24/7, ensuring you can work on your projects at any time that suits you.")
        titlethenpara("Design Studios","Our design studios offer a creative space for students in graphic design, digital media, and product design. Each studio is equipped with high-end graphic tablets, professional-grade software, and large-format printers, allowing you to bring your ideas to life. The studios also feature collaborative spaces where you can work with peers and faculty on group projects.")
        titlethenpara("Innovation and Makerspace","Cantor College’s Innovation and Makerspace is a hub for creativity and invention. This facility is equipped with 3D printers, laser cutters, CNC machines, and other advanced prototyping tools. Whether you're working on a design project or developing a new tech product, this space provides the resources to turn your concepts into reality.")
        titlethenpara("Technology Sandbox","The Technology Sandbox is an experimental space where students can explore the latest in VR, AR, and AI technologies. With access to cutting-edge devices and software, you’ll be able to experiment with emerging technologies and push the boundaries of what’s possible in your field.")
        titlethenpara("Collaborative Learning Spaces ","Our campus features numerous collaborative learning spaces designed to foster teamwork and creative problem-solving. These spaces are equipped with smartboards, video conferencing tools, and flexible seating arrangements, making them ideal for group work, study sessions, or brainstorming meetings.")
        titlethenpara("Library and Resource Centre","The Cantor College Library is a comprehensive resource Centre offering an extensive collection of books, journals, and digital resources related to computing, design, and technology. The library also provides quiet study areas, computer stations, and access to online databases, ensuring you have the information you need at your fingertips.")
        titlethenpara("Student Hub","The Student Hub is the social heart of our campus, providing a place for relaxation and connection. Here, you’ll find a café, lounge areas, and recreational facilities, making it the perfect spot to unwind between classes, meet with friends, or join student-led activities and clubs.")
        titlethenpara("Career and Development Centre","Our Career and Development Centre is dedicated to helping you plan your future. Offering career counseling, resume workshops, and job placement services, this Centre provides the support you need to transition from student to professional. The Centre also hosts regular employer networking events and industry talks to help you build connections in your field.")
        titlethenpara("Fitness and Wellness Centre ","We believe in nurturing both the mind and body. Our Fitness and Wellness Centre offers a fully equipped gym, exercise studios, and a range of fitness classes to help you stay healthy and active. The Centre also includes wellness services such as yoga, meditation, and counseling to support your overall well-being.")
        titlethenpara("On-Campus Housing","For those who choose to live on campus, Cantor College offers modern, comfortable housing options. Our residence halls provide a supportive community environment, with amenities like high-speed internet, study lounges, and common areas where you can relax and socialize.")
        addtextelement("h3","Experience Cantor College",insidesec)
        addtextelement("p","Cantor College’s facilities are designed to enhance your learning experience and support your academic and personal growth. We invite you to explore our campus, discover our resources, and make the most of everything we have to offer.",insidesec)
    }
    else if(typee == "Businesses")
    {
        addtextelement("h2","Information For Businesses",insidesec)
        addtextelement("h3","Partner with Cantor College: Unlock Expertise, Innovation, and Growth",insidesec)
        addtextelement("p","At Cantor College, we believe in the power of collaboration between education and industry. Our College offers a range of specialized services designed to support businesses in achieving their goals through cutting-edge expertise, innovation, and tailored solutions. With a focus on Computing, Design, and Technology, we are uniquely positioned to help your business thrive in an increasingly digital world.",insidesec)
        addtextelement("h3","Our Services",insidesec)
        const tbl = addelement(insidesec,"table")
        function titlethenparatbl1(ttle,para)
        {
            tableinserter(ttle,para,tbl)
        }
        titlethenparatbl1("Custom Training and Development Programs","Empower your workforce with skills that matter. Our faculty can develop custom training programs that address your business's specific needs, whether in advanced computing technologies, creative design, or the latest in tech innovation. We offer flexible learning options, including on-site workshops, online modules, and blended learning experiences.")
        titlethenparatbl1("Research and Development Partnerships","Leverage the talent and creativity of our students and faculty by partnering with Cantor College on research and development projects. Whether you’re looking to explore new technologies, innovate your product line, or solve complex technical challenges, our R&D team is ready to collaborate with you.")
        titlethenparatbl1("Design and Technology Consultancy","Our experienced professionals and top-tier students can provide consultancy services to help you with a variety of projects, from web development and software engineering to product design and user experience optimization. We offer fresh perspectives and innovative approaches tailored to your business.")
        titlethenparatbl1("Internships and Graduate Recruitment","Gain access to a pool of highly skilled and motivated students ready to contribute to your business. Our internship and recruitment services can connect you with top talent in computing, design, and technology, providing you with candidates ")
        titlethenparatbl1("Event Hosting and Sponsorship","Cantor College hosts a range of events throughout the year, including hackathons, design challenges, and technology expos. We offer businesses the opportunity to sponsor events or collaborate in their organization, giving you direct access to the brightest minds in the field and the chance to showcase your brand to our community.")
      
        addtextelement("h3","Why Partner with Cantor College?",insidesec)
        const tb2 = addelement(insidesec,"table")
        function titlethenparatbl2(ttle,para)
        {
            tableinserter(ttle,para,tb2)
        }
        titlethenparatbl2("Cutting-Edge Expertise:","Our programs are at the forefront of industry trends, ensuring that our services reflect the latest advancements in technology and design.")
        titlethenparatbl2("Innovation at the Core:","We foster a culture of creativity and problem-solving, making us the ideal partner for businesses seeking innovative solutions.")
        titlethenparatbl2("Tailored Solutions:","We understand that every business is unique. Our services are customized to meet your specific objectives and challenges.")
        titlethenparatbl2("Future-Ready Talent:","Our students are trained to excel in the modern workplace, equipped with both theoretical knowledge and practical skills.")
        addtextelement("h3","Get in Touch",insidesec)
        addtextelement("p","Ready to explore how Cantor College can help your business grow? Contact our Business Services team today to discuss your needs and learn more about our offerings. We look forward to working with you to achieve your business goals.",insidesec)
    }
}
updateinfotext("Students")
//buttons
const buttons = document.getElementsByTagName("button")
for (const button of buttons) {
    let buttonname = button.innerHTML
    console.log(buttonname)

    button.addEventListener('click', (ev) => {
        updateinfotext(buttonname)
    });
}