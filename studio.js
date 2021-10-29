const figure = new Fig.Figure({ color: [1, 0, 0, 1] });
const eqn = figure.add(
  {
      make: 'equation',
      scale: `0.9`,
      formDefaults: {
        alignment: {
          xAlign: 'center',
          yAlign: 'middle',
        },
      }, 
      elements: {
      ciao1: `ciao`,
      ciao2: `ciao`,
      tempo: `tempo`,
      libero: `libero`,
      c1: `c`,
      i1: `i`,
      a1: `a`,
      o1: `o`,
      c2: `c`,
      i2: `i`,
      a2: `a`,
      o2: `o`,
      t: `t`,
      e1: `e`,
      m: `m`,
      p: `p`,
      o3: `o`,
      l: `l`,
      i3: `i`,
      b: `b`,
      e2: `e`,
      r: `r`,
      o4: `o`  
    },


    // Define two different forms of the equation
    forms: {
      1: [`a1`,`a2`,`b`,`c1`, `c2`,`e1`,`e2`,`i1`,`i2`,`i3`,`l`,`m`,`o1`,`o2`,`o3`,`o4`,`p`,`r`,`t`],
      2: {
        content: [`a1`,`o1`,`i1`,`c1`,`  `,`o2`,`c2`,`a2`,`i2`,`  `,`o3`,`m`,`p`,`e1`,`t`,`  `,`o4`,`r`,`l`,`i3`,`b`,`e2`],
        // Define how the 'c' element will move to this form
        translation: {
          c1: { style: 'curved', direction: 'down', mag: 0.1 },
          i1: { style: 'curved', direction: 'up', mag: 0.1 },
          a1: { style: 'curved', direction: 'down', mag: 0.1 },
          o1: { style: 'curved', direction: 'up', mag: 0.1 },
          c2: { style: 'curved', direction: 'down', mag: 0.1 },
          i2: { style: 'curved', direction: 'up', mag: 0.1 },
          a2: { style: 'curved', direction: 'down', mag: 0.1 },
          o2: { style: 'curved', direction: 'up', mag: 0.1 },
          t: { style: 'curved', direction: 'down', mag: 0.1 },
          e1: { style: 'curved', direction: 'up', mag: 0.1 },
          m: { style: 'curved', direction: 'down', mag: 0.1 },
          p: { style: 'curved', direction: 'up', mag: 0.1 },
          o3: { style: 'curved', direction: 'down', mag: 0.1 },
          l: { style: 'curved', direction: 'up', mag: 0.1 },
          i3: { style: 'curved', direction: 'down', mag: 0.1 },
          b: { style: 'curved', direction: 'up', mag: 0.1 },
          e2: { style: 'curved', direction: 'down', mag: 0.1 },
          r: { style: 'curved', direction: 'up', mag: 0.1 },
          o4: { style: 'curved', direction: 'down', mag: 0.1 }    
        },
      },
      3: {
        content: [`c1`,`i1`,`a1`,`o1`,`  `,`c2`,`i2`,`a2`,`o2`,`  `,`t`,`e1`,`m`,`p`,`o3`,`  `,`l`,`i3`,`b`,`e2`,`r`,`o4`],
        translation: {
          c1: { style: 'curved', direction: 'down', mag: 0.1 },
          i1: { style: 'curved', direction: 'up', mag: 0.1 },
          a1: { style: 'curved', direction: 'down', mag: 0.1 },
          o1: { style: 'curved', direction: 'up', mag: 0.1 },
          c2: { style: 'curved', direction: 'down', mag: 0.1 },
          i2: { style: 'curved', direction: 'up', mag: 0.1 },
          a2: { style: 'curved', direction: 'down', mag: 0.1 },
          o2: { style: 'curved', direction: 'up', mag: 0.1 },
          t: { style: 'curved', direction: 'down', mag: 0.1 },
          e1: { style: 'curved', direction: 'up', mag: 0.1 },
          m: { style: 'curved', direction: 'down', mag: 0.1 },
          p: { style: 'curved', direction: 'up', mag: 0.1 },
          o3: { style: 'curved', direction: 'down', mag: 0.1 },
          l: { style: 'curved', direction: 'up', mag: 0.1 },
          i3: { style: 'curved', direction: 'down', mag: 0.1 },
          b: { style: 'curved', direction: 'up', mag: 0.1 },
          e2: { style: 'curved', direction: 'down', mag: 0.1 },
          r: { style: 'curved', direction: 'up', mag: 0.1 },
          o4: { style: 'curved', direction: 'down', mag: 0.1 }    
        },
        // Define how the 'c' element will move to this form
        
      },
    },
  },
);

// Show the equation form
eqn.showForm('1');

// // Animate to the next form

/* eqn.goToForm({
  form: '3',
  delay: 1,
  duration: 1.5,
  animate: 'move',
}); */
let nextForm = () => {
  eqn.nextForm({ delay: 1, callback: () => setTimeout(() => nextForm(), 10) });
};
nextForm();

