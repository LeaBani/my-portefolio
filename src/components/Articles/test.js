import React from 'react';
import Card from 'react-bootstrap/Card';

function Test() {
  return (
    <Card>
      <Card.Body>
        <h3>C. Computational Simulation</h3>
        <p>
          The flow system was modeled in a discrete event simulation tool, Arena, developed by Rockwell Automation. Discrete event simulation is a method that models the behavior of a system by focusing on state changes that occur at specific moments, allowing the analysis of complex processes over time and the evaluation of the impact of different variables.
        </p>

        <h4>a. Description of Variables</h4>
        <p>
          The simulation duration was set to 221 days for a work period of 11 effective hours per day, representing the high season, followed by 98 days for a work period of 8 hours, representing the low season of inland navigation on the Garonne River and its canal.
        </p>
        <p>
          We replicated this simulation 10 times to compare each replication and consolidate the results. Replication helps reduce uncertainty because by multiplying replications, the impact of random fluctuations is diminished. This helps to validate the consistency of the results. In this case, the time is being evaluated.
        </p>
        <p>
          In this study, we evaluate six performance indicators:
        </p>
        <ul>
          <li>The duration of a river unit's rotation,</li>
          <li>The average number of rotations,</li>
          <li>The average number of trucks transiting through the multimodal route,</li>
          <li>The average waiting time of the river unit at the river port,</li>
          <li>The waiting time of goods at the river port,</li>
          <li>The amount of goods waiting at the river port.</li>
        </ul>

        <p>
          To model uncertainties, we identified two main factors: the tidal range, which represents a significant source of variation, and the waiting times at locks, which can impact the navigation time and the speed of boat rotations. We now aim to evaluate how these two uncertainties (tidal range and waiting times) will affect the system's operation in the long term.
        </p>

        <p>
          The waiting time at locks is estimated between 15 and 30 minutes, with a uniform probability distribution.
        </p>
        <p>
          For locks 52 and 53, we collected tidal schedules from the internet over 60 days. Using this data, we were able to determine waiting times by matching the navigation schedules with the high tide schedules. Below is an excerpt of these schedules for the high season (source: <a href="https://maree.info/">https://maree.info/</a>):
        </p>

        <table>
          <caption>Table 25. Extract from Bordeaux Tide Schedules</caption>
          <thead>
            <tr>
              <th>Date</th>
              <th>High Tide Time</th>
              <th>Low Tide Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2024-04-01</td>
              <td>12:00</td>
              <td>18:00</td>
            </tr>
            <tr>
              <td>2024-04-02</td>
              <td>12:30</td>
              <td>18:30</td>
            </tr>
          </tbody>
        </table>

        <p>Here is a summary table of the times considered in the simulation model:</p>

        <table>
          <caption>Summary of Time Variables in the Simulation Model</caption>
          <thead>
            <tr>
              <th>Variable</th>
              <th>Tested Value</th>
              <th>Measurement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rotation Time (V7)</td>
              <td>8, 11</td>
              <td>hours</td>
            </tr>
            <tr>
              <td>Frequency of Goods Availability (V8)</td>
              <td>4, 5, 7</td>
              <td>days</td>
            </tr>
            <tr>
              <td>Possible Navigation Days (V9)</td>
              <td>98, 221</td>
              <td>days</td>
            </tr>
          </tbody>
        </table>

        <p>The duration of a river unit's rotation is counted from the time it enters the river port before loading the goods until its return empty to the same point (case #1). The loading of goods is included in case #2 of the simulation.</p>

        <h4>b. Decision Variables</h4>
        <p>
          In this analysis method, we aim to measure the impact of uncertainties on the rotation time. This will contribute to evaluating the robustness of the economic study, especially regarding the decision variable V2, which is the frequency of river unit rotations (see page 23).
        </p>

        <table>
          <caption>Table 26. Decision Variables Influencing the Computational Simulation</caption>
          <thead>
            <tr>
              <th>Variable</th>
              <th>Tested Value</th>
              <th>Measurement</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>V7 Hours of Navigation</td>
              <td>8, 11</td>
              <td>hours</td>
            </tr>
            <tr>
              <td>V8 Frequency of Goods Availability</td>
              <td>4, 5, 7</td>
              <td>days</td>
            </tr>
            <tr>
              <td>V9 Number of Possible Navigation Days</td>
              <td>98, 221</td>
              <td>days</td>
            </tr>
          </tbody>
        </table>

        <h4>c. List of Scenarios</h4>
        <p>
          We first evaluate the rotation of the river unit from the port quay, crossing the locks and the Garonne River, the unloading time at the Grand Port Maritime de Bordeaux (GPMB), and then the return via the Garonne and the lateral canal locks.
        </p>
        <p>
          Two scenarios are proposed depending on whether it is the high season or low season.
        </p>
        <p>
          The process begins with the successive loading of 8 trucks at the shipper's location. Once the trucks are loaded, they are unloaded, and their contents are transferred to a river unit. After being fully loaded, the unit begins its transit, passing through 13 locks and the Garonne before arriving at GPMB, where it is unloaded. The return of the river unit is empty. Each step of the process, from loading to return, is timed. The distances traveled and transport speeds are also integrated into the model for accurate representation.
        </p>

        <p>To present the results, the combination of scenarios allows modeling the quantity of goods transported over an entire year. Therefore, scenarios 1B-2B-3B take place during the high season, and scenarios 4B-5B-6B occur during the low season.</p>

        <h4>d. Results</h4>
        <p><strong>Case #1: Modeling the River Unit's Path</strong></p>
        <table>
          <caption>Table 27. Performance Analysis of Scenarios (Average of Replications), Case #1</caption>
        </table>

        <p>The histogram below helps identify the most frequently observed time intervals when the uncertainties are implemented.</p>

        <figure>
          <img src="path-to-your-histogram-image" alt="Histogram of Frequencies by Scenario, Case #1" />
          <figcaption>Figure 28. Frequency Histograms of Durations by Scenario, Case #1</figcaption>
        </figure>

        <p>For scenario 1A, the rotation time is concentrated between 4 and 4.4 days. For scenario 2A, the most frequent rotation time is between 5.4 and 5.9 days. This time does not include the loading/unloading time at the river port.</p>
        <p>In scenario 1A (high season), the probability that the rotation time exceeds 5 days is zero, meaning the rotation time is always under 5 days. In scenario 2A (low season), 98.2% of rotations last more than 5 days, and 5.3% last more than 6 days. Therefore, the rotation time is between 5 and 6 days.</p>

        <p><strong>Case #2: Synchronizing Flows with the River Unit</strong></p>
        <table>
          <caption>Table 29. Performance Analysis of Scenarios (Average of Replications), Case #2</caption>
        </table>

        <p>In case #2, the frequency of goods availability from the shippers is taken into account. We observe a waiting time for goods accumulation at the quay. In this model, the goods wait for the river unit. The goods are made available regularly every 7, 5, and 4 days by the shippers (e.g., pre-delivery organization). If the goods are available at the loading quay, the river unit does not wait; it is loaded and can start a new rotation.</p>

        <figure>
          <img src="path-to-histogram-case2-image" alt="Frequency Histograms of Durations by Scenario, Case #2" />
          <figcaption>Figure 30. Frequency Histograms of Durations by Scenario, Case #2</figcaption>
        </figure>

        <p>On the 310 operational days, significant disparities behind the average are observed. To analyze this, Figure 28 examines the probability that a rotation time exceeds 5, 6, or 7 days in each scenario.</p>
      </Card.Body>
    </Card>
  );
}

export default Test;
