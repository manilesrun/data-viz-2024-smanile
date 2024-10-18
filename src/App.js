import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";

const App = () => {
  // Create a ref for the Tableau viz container
  // const tableauRef = useRef(null);

  // Use useEffect to load the Tableau viz when the component mounts
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    script.onload = () => {
      var scriptElement = document.createElement("script");
      scriptElement.src =
        "https://public.tableau.com/javascripts/api/viz_v1.js";
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="scroll-smooth bg-slate-50">
      {/* First Chapter */}
      <section className=" m-auto max-w-[62.5rem] min-h-screen flex flex-col justify-center items-center">
        <p className="text-xl text-center">From your opinion...</p>
        <h1 className="text-3xl text-center mb-4">
          What is the biggest health problem in the world ?
        </h1>
        <p className="italic text-center pt-4">
          Please scroll down to find out the answer.
        </p>
      </section>

      {/* First Point */}
      <section className=" m-auto max-w-[62.5rem] min-h-screen flex flex-col justify-center items-center">
        <p className=" pb-10">
          According to a 2024 survey of individuals from 31 countries,{" "}
          <strong>
            45% of respondents identified mental health as the most significant
            health issue facing their nation
          </strong>
          , surpassing other major concerns such as cancer, stress, and obesity.
        </p>
        {/* reference: https://www-statista-com.ezproxy.canberra.edu.au/statistics/917148/leading-health-problems-worldwide/ */}

        <div
          className="tableauPlaceholder"
          id="viz1729077319927"
          style={{ position: "relative" }}
        >
          <noscript>
            <a href="#">
              <img
                alt="Dashboard 2"
                src="https://public.tableau.com/static/images/Le/LeadingProblemGlobally/Dashboard2/1_rss.png"
                style={{ border: "none" }}
              />
            </a>
          </noscript>
          <object
            className="tableauViz"
            style={{ display: "none", width: "1000px", height: "827px" }}
          >
            <param
              name="host_url"
              value="https%3A%2F%2Fpublic.tableau.com%2F"
            />
            <param name="embed_code_version" value="3" />
            <param name="site_root" value="" />
            <param name="name" value="LeadingProblemGlobally/Dashboard2" />
            <param name="tabs" value="no" />
            <param name="toolbar" value="yes" />
            <param
              name="static_image"
              value="https://public.tableau.com/static/images/Le/LeadingProblemGlobally/Dashboard2/1.png"
            />
            <param name="animate_transition" value="yes" />
            <param name="display_static_image" value="yes" />
            <param name="display_spinner" value="yes" />
            <param name="display_overlay" value="yes" />
            <param name="display_count" value="yes" />
            <param name="language" value="en-US" />
            <param name="filter" value="publish=yes" />
          </object>
        </div>
      </section>

      {/* Second point */}
      <section className=" m-auto max-w-[62.5rem] min-h-screen flex flex-col justify-center items-center ">
        <p className=" pb-10 pt-10">
          Moreover, when focusing on mental health at the country level, we find
          that <strong>60% of adults in Australia</strong> identified mental
          health problems as the most significant health issue facing the nation
          in 2023, ranking it among the highest percentages globally.
        </p>
        {/* reference: https://www-statista-com.ezproxy.canberra.edu.au/statistics/1357952/adults-worldwide-mental-health-as-the-leading-health-problem-in-their-country/ */}
        <div
          className="tableauPlaceholder"
          id="viz1729065249659"
          style={{ position: "relative" }}
        >
          <noscript>
            <a href="#">
              <img
                alt="Dashboard 1"
                src="https://public.tableau.com/static/images/Me/MentalHealthGlobally/Dashboard1/1_rss.png"
                style={{ border: "none" }}
              />
            </a>
          </noscript>
          <object
            className="tableauViz"
            style={{ width: "1000px", height: "827px" }}
          >
            <param
              name="host_url"
              value="https%3A%2F%2Fpublic.tableau.com%2F"
            />
            <param name="embed_code_version" value="3" />
            <param
              name="path"
              value="views/MentalHealthGlobally/Dashboard1?:language=en-US&:embed=true&:toolbar=yes&:display_count=yes"
            />
            <param name="toolbar" value="yes" />
            <param
              name="static_image"
              value="https://public.tableau.com/static/images/Me/MentalHealthGlobally/Dashboard1/1.png"
            />
            <param name="animate_transition" value="yes" />
            <param name="display_static_image" value="yes" />
            <param name="display_spinner" value="yes" />
            <param name="display_overlay" value="yes" />
            <param name="display_count" value="yes" />
            <param name="language" value="en-US" />
          </object>
        </div>
      </section>

      {/* Third point */}
      <section className=" m-auto max-w-[62.5rem] min-h-screen flex flex-col justify-center items-center ">
        <p className="pb-10 pt-10">
          It becomes clear that individuals aged 16-24 in Australia had the
          highest prevalence of 12-month mental health disorders during the 2021
          financial year when examining mental health by age and sex. Across all
          age groups, females were consistently more likely than males to
          experience a 12-month mental health disorder.
        </p>
        {/* reference: https://www.statista.com/statistics/1321970/australia-share-of-population-with-a-mental-disorder-by-age-and-sex/ */}

        <div
          className="tableauPlaceholder"
          id="viz1729085181353"
          style={{ position: "relative" }}
        >
          <noscript>
            <a href="#">
              <img
                alt="Share of population with a 12-month mental disorder in Australia in financial year 2021, by age and sex"
                src="https://public.tableau.com/static/images/ag/age_sex_mental_disorder_au/Sheet4/1_rss.png"
                style={{ border: "none" }}
              />
            </a>
          </noscript>
          <object
            className="tableauViz"
            style={{
              display: "none",
              width: "1000px",
              height: "827px",
            }}
          >
            <param
              name="host_url"
              value="https%3A%2F%2Fpublic.tableau.com%2F"
            />
            <param name="embed_code_version" value="3" />
            <param name="site_root" value="" />
            <param name="name" value="age_sex_mental_disorder_au/Sheet4" />
            <param name="tabs" value="no" />
            <param name="toolbar" value="yes" />
            <param
              name="static_image"
              value="https://public.tableau.com/static/images/ag/age_sex_mental_disorder_au/Sheet4/1.png"
            />
            <param name="animate_transition" value="yes" />
            <param name="display_static_image" value="yes" />
            <param name="display_spinner" value="yes" />
            <param name="display_overlay" value="yes" />
            <param name="display_count" value="yes" />
            <param name="language" value="en-US" />
            <param name="filter" value="publish=yes" />
          </object>
        </div>
      </section>

      {/* Second Chapter */}

      {/* Third Chapter */}
      <section className=" m-auto max-w-[62.5rem] min-h-screen flex flex-col justify-center items-center">
        <p className="text-xl">
          After knowing that mental health is a serious health issue,
        </p>
        <h1 className="text-3xl text-center mb-4">
          Let's imagine for a moment that you're struggling with your mental
          health. You’ve been feeling anxious or down for months, and it’s
          starting to affect your relationships, work, and everyday life. Every
          day, it gets a little harder to keep things together, and deep down,
          you know that you might need help.
        </h1>
        <p className="italic text-center pt-4">
          Would you reach out to someone for support, or would you keep it to
          yourself?
        </p>
      </section>

      {/* First point */}
      <section className=" m-auto max-w-[62.5rem] min-h-screen flex flex-col justify-center items-center mt-[-5rem]">
        <p className=" pb-10 ">
          Surprisingly, the data below shows that{" "}
          <strong>
            52.9% of individuals aged 16–85 with lifetime mental disorders did
            not seek professional help
          </strong>
          . This includes 62.5% of males and 46.2% of females, revealing a clear
          gap in support access—especially for men.{" "}
          <em>But can you think of why this might be the case?</em>
        </p>

        {/* reference: https://www.abs.gov.au/statistics/health/mental-health/national-study-mental-health-and-wellbeing/2020-21/Table%206%20%E2%80%93%20Consultations%20with%20health%20professionals%20for%20mental%20health.xlsx */}

        <div
          className="tableauPlaceholder"
          id="viz1729148864095"
          style={{ position: "relative" }}
        >
          <noscript>
            <a href="#">
              <img
                alt="Consultations with Health Professionals for Mental Health Among Australians Aged 16–85 with 12-Month Symptoms of Lifetime Mental Disorders (2020-2021)"
                src="https://public.tableau.com/static/images/co/consultation_mental_health_data/Sheet1/1_rss.png"
                style={{ border: "none" }}
              />
            </a>
          </noscript>
          <object
            className="tableauViz"
            style={{
              display: "none",
              width: "1000px",
              height: "350px",
            }}
          >
            <param
              name="host_url"
              value="https%3A%2F%2Fpublic.tableau.com%2F"
            />
            <param name="embed_code_version" value="3" />
            <param name="site_root" value="" />
            <param name="name" value="consultation_mental_health_data/Sheet1" />
            <param name="tabs" value="no" />
            <param name="toolbar" value="yes" />
            <param
              name="static_image"
              value="https://public.tableau.com/static/images/co/consultation_mental_health_data/Sheet1/1.png"
            />
            <param name="animate_transition" value="yes" />
            <param name="display_static_image" value="yes" />
            <param name="display_spinner" value="yes" />
            <param name="display_overlay" value="yes" />
            <param name="display_count" value="yes" />
            <param name="language" value="en-US" />
            <param name="filter" value="publish=yes" />
          </object>
        </div>
      </section>

      {/* Second point */}
      <section className=" m-auto max-w-[62.5rem] min-h-screen flex flex-col justify-center items-center mt-[-7rem] ">
        <p className=" pb-10 ">
          The statistic below reveals that{" "}
          <strong>stigma and confidentiality concerns</strong> are the top
          barriers, even more than practical issues like cost or location. This
          tells us that the battle isn’t just about providing services; it’s
          also about{" "}
          <strong>
            changing mindsets, building trust, and encouraging open
            conversations about mental health
          </strong>
          .
        </p>
        {/* reference: https://www-statista-com.ezproxy.canberra.edu.au/statistics/1357976/australia-leading-barriers-for-young-people-to-accessing-mental-health-support/ */}
        <div
          className="tableauPlaceholder"
          id="viz1729135902611"
          style={{ position: "relative" }}
        >
          <noscript>
            <a href="#">
              <img
                alt="Leading barriers for young people to accessing mental health support in Australia in 2022"
                src="https://public.tableau.com/static/images/ba/barriersmentalhealthdata/Sheet5/1_rss.png"
                style={{ border: "none" }}
              />
            </a>
          </noscript>
          <object
            className="tableauViz"
            style={{
              display: "none",
              width: "1000px",
              height: "600px",
            }}
          >
            <param
              name="host_url"
              value="https%3A%2F%2Fpublic.tableau.com%2F"
            />
            <param name="embed_code_version" value="3" />
            <param name="site_root" value="" />
            <param name="name" value="barriersmentalhealthdata/Sheet5" />
            <param name="tabs" value="no" />
            <param name="toolbar" value="yes" />
            <param
              name="static_image"
              value="https://public.tableau.com/static/images/ba/barriersmentalhealthdata/Sheet5/1.png"
            />
            <param name="animate_transition" value="yes" />
            <param name="display_static_image" value="yes" />
            <param name="display_spinner" value="yes" />
            <param name="display_overlay" value="yes" />
            <param name="display_count" value="yes" />
            <param name="language" value="en-US" />
            <param name="filter" value="publish=yes" />
          </object>
        </div>
      </section>

      {/* Call to action */}
      <section className=" m-auto max-w-[62.5rem] min-h-screen flex flex-col justify-center ">
        <p className="mb-4 text-xl">
          Thank you for exploring the data. As we move towards the end, it's
          clear that addressing mental health issues requires more than just
          providing services—it demands a shift in how we talk about mental
          health, how we support those in need, and how we break the stigmas
          that hold people back.
        </p>

        <p className="mt-4 text-xl">
          Above all, in moments of challenge, one thing remains constant -{" "}
          <strong> HOPE</strong>.
        </p>

        <div className="mt-10 items-center flex flex-col">
          <h1 className="text-3xl mb-4">
            <p>
              <strong>HOPE</strong> is the thing with feathers,
            </p>
            <p>That perches in the soul,</p>
            <p>And sings the tune without the words</p>
            <p>And never stops - at all.</p>
          </h1>
          <p className="italic text-right ml-[22rem] pt-4">- Emily Dickinson</p>
        </div>
      </section>

      {/* Lifeline Card */}
      <section className=" m-auto max-w-[62.5rem] min-h-screen flex flex-col justify-center items-center mt-[-10rem]">
        <div className="bg-zinc-200 rounded-[2rem] p-10 max-w-sm text-center">
          <h3 className="text-2xl font-bold mb-2">Lifeline</h3>
          <p className="text-gray-700 mb-4">
            Lifeline is a 24-hour crisis support line, and is accessible to
            Australians by calling <strong>13 11 14</strong> or via their online
            website.
          </p>
          <a
            href="https://www.lifeline.org.au"
            className="bg-green-300 text-white px-4 py-2 rounded-lg hover:bg-green-400"
          >
            Visit Lifeline Website
          </a>
        </div>

        <div className=" flex gap-4 mt-16 justify-end">
          <FaGithub className=" mt-[0.2rem]" />
          <a
            href="https://github.com/manilesrun/data-viz-2024-smanile"
            className=" hover:text-green-700"
          >
            View the code on GitHub
          </a>
        </div>
      </section>
    </div>
  );
};

export default App;
