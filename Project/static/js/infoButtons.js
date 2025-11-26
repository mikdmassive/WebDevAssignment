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