import { NextResponse } from 'next/server';

const mock = {
  id: '9151f21f-43ae-43b4-92f3-f4af67cdf544',
  title: 'Teamlead C++',
  knowledgeList: ['UML', 'SQL', 'JIRA'],
  location: 'Remote',
  type: 'Full Time',
  description: `A videogame-creating collective and an international gaming brand launched in 2016 by a handful of people involved with online football. Currently, there are 200+ of us spread over 5 regional offices in various locations across Europe or working from home (yes, we love it too). We are the force behind the UFL, the ongoing online football videogame revolution. Being fans, we aim at offering our players an unprecedented gaming experience available on all major platforms.
We are looking for a Game Producer to join our Game Design Department!`,
  fullDescription: `
**Time zone:**
GMT+2.

**Management:**
CEO / Game Director.

**What's in it for you:**
- An opportunity to make a revolution in the football simulator area by directly influencing the product.

**What you need to do:**
- Manage a cross-functional development unit (Core Gameplay / AI / Meta Game) and maintain the focus and vision;
- Collaborate on game feature development, from the concept to implementation, release, and post-production;
- Analyze the project’s metrics and make data-driven decisions;
- Control development deadlines;
- Manage risks, analyze alternative scenarios;
- Supervise design documents and specifications for the project;
- Research industry trends.

**What we are looking for:**
- At least 5 years of experience in Game Development in Game Producer / Lead Game Designer roles;
- At least one AA / AAA game shipped;
- Successful cases of F2P game operation;
- Game Design skills;
- Ability to analyze production metrics and benchmarks;
- Excellent leadership, organization, and problem-solving skills;
- Excellent verbal and written communication skills;
- Good knowledge of the F2P gaming market and current gaming trends;
- English (B2).

**Desirable:**
- Deep knowledge of the sport simulators market;
- Passion for Football.

**We offer:**
- Salary pegged to the US Dollar;
- Medical insurance and social benefits;
- Sick-leaves;
- Remote work;
- Referral bonuses;
- Sports compensation;
- Online English classes;
- Co-working compensation.

**Hiring process:**
1. Interview with the CEO;
2. Test;
3. 1-2 meetings with the team.
`,
  btnReplay: {
    name: 'Replay',
  },
};

export const GET = async () => {
  return NextResponse.json(mock);
};
