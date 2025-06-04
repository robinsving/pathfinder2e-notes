# 🔧 Engineer – Damage Control & Blink Drive Management
<p><i>"If it ain’t broke, I don’t trust it."</i></p>

<p><b>Take Control:</b> @Check[crafting|dc:34], @Check[survival|dc:34], @Check[stealth|dc:34]</p>

<h3>🛠 Engineer Actions</h3>
<ul>
  <li><b>Take Control (1 action):</b> @Check[crafting|dc:34], @Check[survival|dc:34], @Check[stealth|dc:34] — Gain control of the Engineering station.</li>

  <li><b>Patch Hull (2 actions):</b> @Check[crafting|dc:36] or @Check[survival|dc:36] → Repairs 20 Hull HP.</li>

  <li><b>Stabilize Blink Drive (2 actions):</b> @Check[crafting|dc:36] or @Check[survival|dc:36] → 
    <ul>
      <li>Success: Reduce instability by 1</li>
      <li>Critical Success: Reduce instability by 2</li>
      <li>Critical Failure: Increase instability by 1</li>
      <li><i>(Cannot reduce below 1)</i></li>
    </ul>
  </li>

  <li><b>Boost Engines (1 action, once/round):</b> @Check[crafting|dc:30] or @Check[survival|dc:30] → +20 ft movement this round.</li>

  <li><b>Dimensional Emergency Patch (1 action, once/5 rounds):</b> Sets Blink Drive instability level to 1 (min. 1), but adds +2 to the next Blink Drive roll.</li>

  <li><b>Portal Blast (3 actions, 50 ft radius):</b> Emits a shockwave from the ship. 
    <ul>
      <li>(at)Template[Circle|radius:50|fillColor:#9933FF]</li>
      <li>Reflex save vs. highest of @Check[crafting] or @Check[survival]</li>
      <li>Success: 🌀 Stunned 1</li>
      <li>Failure: 🌀 Stunned 3</li>
      <li>Critical Failure: 🌀 Stunned 6</li>
      <li>After effect: Emergency blink jump required</li>
    </ul>
  </li>

  <li><b>Emergency Reactor Burn (1 action, once/round):</b> Roll 1d20:
    <ul>
      <li>1–4: @Damage[4d12[fire]] to the ship</li>
      <li>5–14: No effect</li>
      <li>15–20: +50 ft movement this turn, Blink Drive instability +1</li>
    </ul>
  </li>
</ul>