import React, { useEffect, useState } from 'react';
import Layout from '../Component/Layout';
import '../App.css';
import AOS from 'aos'
const Gymwork = () => {
  AOS.init();
  const fulltxt = "Get your workout NOW !!";
  const [txt, settxt] = useState("");
  const [idx, setidx] = useState(0);

  useEffect(() => {
    if (idx < fulltxt.length) {
      const timeOut = setTimeout(() => {
        settxt((prev) => prev + fulltxt[idx]);
        setidx(idx + 1);
      }, 80);
      return () => clearTimeout(timeOut);
    }
  }, [idx]);

  const [muscle, setMuscle] = useState("");
  const [level, setLevel] = useState("");
  const [eq, seteq] = useState("");
  const [result, setResult] = useState([]);
  const [error, seterror] = useState("");
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleMuscle = (e) => setMuscle(e.target.value);
  const handleLevel = (e) => setLevel(e.target.value);
  const handleeq = (e) => seteq(e.target.value);

  const handleGetResult = () => {
    if (!level || !eq || !muscle) {
      seterror('Please fill all the fields.');
      return;
    }

    seterror('');
    setLoading(true);
    setSearched(true);

    Promise.all([
      fetch('/exercisesIndex.json').then((res) => res.json()),
      fetch('/exerciseImagesIndex.json').then((res) => res.json())
    ])
    .then(([exerciseData, imageArray]) => {
      // Convert image array to a map
      const imageMap = {};
      imageArray.forEach(entry => {
        imageMap[entry.name] = entry.images;
      });

      const filtered = exerciseData.filter(
        (item) => 
          item.level === level &&
          item.equipment === eq &&
          (item.primaryMuscles || []).includes(muscle)
      );

      const withImage = filtered.map((item) => ({
        ...item, 
        images: imageMap[item.name] || []
      }));

      setResult(withImage);
    })
    .catch((err) => {
      console.error('Error fetching data:', err);
      seterror('Error fetching data.');
    })
    .finally(() => setLoading(false));
  };

  return (
    <Layout>
      <div className=' bg-white text-teal-600 h-full lg:p-10 p-2 n'>
        <h1 data-aos="fade-up" className='mb-20 lg:mb-0 text-5xl lg:text-7xl leading-tight'>
        <span className='text-5xl lg:text-9xl '>M</span>aximize Your Workout <br/><span className='bg-white text-black'>With Proper Form</span> 
        </h1>
        <div className='lg:my-30 my-5'>
         <h1 className= ' lg:mb-0 mb-10 text-black text-center lg:text-5xl  text-3xl nn font-light'>5 Key Practices to Remember<br/> When You Exercise</h1>
        </div>
        <div className=''>
          <h1 className='text-black text-3xl '>1. Drink Water While You're Exercising</h1><br/>
          <p className='text-xl text-gray-800'>Even if you hydrate before and after exercise, you should still be taking in fluids during your workout. Aim to drink three to eight ounces of water every 15 to 20 minutes; heavy sweaters should drink more. If you’re worried you may be dehydrated, the easiest way to tell is to check the color of your urine. The darker the color, the more dehydrated you are.It only takes a body water deficit of two percent of your body weight to hurt your performance, making it harder to exercise and see desired results. (Read more on proper hydration during exercise in our article, Nutrition for Your Best Workout.)</p>
        </div>
        <div className='my-10'>
          <h1 className='text-black text-3xl '>2. Tire Out Your Muscles</h1><br/>
          <p className='text-xl text-gray-800'>Exercise experts call this “going to failure”—doing as many repetitions of a strength training move as you can, until your muscles simply can’t do one more. If you exhaust your muscles, 70 percent of the improvements in strength can happen in the first set, which means Exercise experts call this “going to failure”—doing as many repetitions of a strength training move as you can, until your muscles simply can’t do one more. If you exhaust your muscles, 70 percent of the improvements in strength can happen in the first set, which means choosing a weight that’s challenging enough for your muscles to reach “failure” in about eight to 12 reps (the typical amount for a set of one exercise, like bicep curls or an overhead presses). As you become stronger over time, you’ll need to increase the amount of weight to continue to challenge your muscles..)</p>
        </div>
        <div className='my-10'>
          <h1 className='text-black text-3xl '>3. Rest Between Weight Training Sets</h1><br/>
          <p className='text-xl text-gray-800'>If strength training isn’t your favorite kind of workout, or your schedule’s tight, it’s tempting to want to cut out or reduce the time you take to recover between sets. Try not to: Research shows that when lifting heavy weights, resting for several minutes between sets helps you do more reps over multiple sets, ultimately leading to increases in overall strength, primarily because it allows you to train longer. Keep in mind that a super-short break, like 15 or 30 seconds, isn’t enough, though optimal rest times can vary depending on how heavy your weights are. We recommend following these recovery guidelines from The American College of Sports Medicine (ACSM): Rest for one to two minutes between sets with lighter weights (five pounds or less); two to three minutes for moderate weight (six to 10 pounds); and more than three minutes for heavier weights (more than 10 pounds) Or, you can think about it in terms of reps: 12 to 20 reps with lighter weights/rest 30 to 60 seconds; eight to 12 reps with moderate weights/rest 60 to 90 seconds; four to eight reps with heavy weights/rest two to three minutes.</p>
        </div>
        <div className='my-10'>
          <h1 className='text-black text-3xl '>4.Keep Good Form on Cardio Machines, Too</h1><br/>
          <p className='text-xl text-gray-800'>If you’ve ever had a personal trainer or coach instruct you on strength training, whether with free weights or machines, they’ve most likely emphasized how important it is to maintain proper form, both to get a good workout and to avoid injury. But too often, we don’t apply that same logic to the treadmill, elliptical, stationary bike or other cardio machines. The most common mistake? Leaning on the machine and letting it do too much of the work for you.It’s better to choose a slower speed or a lower intensity or resistance if it means you’ll get the most out of your session. Swinging your arms while walking or running makes a difference: One study found that the natural motion of arm-swinging allows runners to perform better and also minimizes torso rotation (a common movement that can lead to back pain). Try to avoid holding onto the machine or answering emails on your phone to hold your form.</p>
        </div>
        <div className='my-10'>
          <h1 className='text-black text-3xl '>5.Breathe When You Stretch</h1><br/>
          <p className='text-xl text-gray-800'>It’s common to hold your breath (usually without even realizing it) when you’re in a stretch. Instead, try to use this time—pre- or post-exercise—to inhale and exhale mindfully. This will help you move deeper into the stretch, allowing your muscles to relax more fully. 
          And when stretching as part of your cool-down, mindful breath work will help bring your heart rate back to normal. These few minutes you spend extending and breathing intentionally can also serve as a mental transition into or out of a workout, preparing you for the session ahead or allowing you to reflect on your efforts.</p>
        </div>
        <h1 className='text-4xl text-red-600'>
          {txt}
        </h1>
























        <div className='grid grid-row-2 lg:grid-cols-3 gap-10  rounded-lg bg-gray-400 p-10 border-blue-700 lg:mt-20 mt-10'>
          <select value={level} onChange={handleLevel} className="outline-0 border border-white bg-black text-white select">
            <option value="" className='bg-black' disabled>Select Level</option>
            <option className='bg-black'>beginner</option>
            <option className='bg-black'>intermediate</option>
          
          </select>

          <select value={muscle} onChange={handleMuscle} className="outline-0 border border-white bg-black text-white select">
            <option value="" className='bg-black' disabled>Pick a Muscles</option>
            <option className='bg-black'>chest</option>
            <option className='bg-black'>back</option>
            <option className='bg-black'>shoulders</option>
            <option className='bg-black'>arms</option>
            <option className='bg-black'>abdominis</option>
            <option className='bg-black'>glutes</option>
            <option className='bg-black'>quadriceps</option>
            <option className='bg-black'>hamstrings</option>
            <option className='bg-black'>calves</option>
          </select>
          <select value={eq} onChange={handleeq} className="outline-0 border border-white bg-black text-white select">
            <option value="" className='bg-black' disabled>Pick a equipment</option>
            <option className='bg-black'>dumbbell</option>
            <option className='bg-black'>machine</option>
            <option className='bg-black'>barbell</option>
            <option className='bg-black'>other</option>
            
          </select>

          

          <button onClick={handleGetResult} className="btn btn-wide bg-amber-300 border-0">Get</button>
        </div>

        {error && <div className="text-red-400 mb-4">{error}</div>}
        {loading && <div className="text-blue-400 mb-4">Loading...</div>}

        <div id="result" className="text-black bg-white mt-6">
          {result.length > 0 ? (
            <div className='lg:shadow-[0_0_25px_5px_rgba(59,130,246,0.7)] lg:p-10 rounded-2xl'>
              <h3 className="text-3xl text-center font-semibold text-blue-500 mb-6">Results:</h3>
              <ol className="number list-inside">
                {result.map((item, index) => (
                  <li key={index} className="mb-10 p-10 border-4 border-blue-950 rounded-xl">
                    <strong className='text-black leading-loose bg-yellow-300 bg-opacity-50 p-2 text-2xl rounded'>{item.name}</strong>

                    {/* Images */}
                    {item.images && item.images.length > 0 && (
                      <div className="flex flex-wrap gap-4 my-4">
                        {item.images.map((imgSrc, i) => (
                          <img
                            key={i}
                            src={`/${imgSrc}`}
                            alt={`${item.name} ${i}`}
                            className="w-64 h-auto rounded-lg border border-blue-400"
                          />
                        ))}
                      </div>
                    )}

                    {/* Instructions */}
                    <ul className="list-disc list-inside lg:m-4">
                      {item.instructions.map((step, idx) => (
                        <li className='mb-3' key={idx}>{step}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
            </div>
          ) : (
            searched && !loading && <p>No results found.</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Gymwork;
