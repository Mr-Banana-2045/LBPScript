### Start
<pre>
  <code>
  <LBPScript> .... </LBPScript>
  </code>
</pre>

## Create Tabe >
<pre>
  <code>
$name = true;
startTabe($name, ..., () => {
chap("text",":",$name");
});
  </code>
</pre>
## Text Print >
<pre>
  <code>
chap("hello");
chap("I","Am","Moz");
chap(2 * 5);
  </code>
</pre>
## Create Shart >
<pre>
  <code>
startShart(1 === 1 && 2 === 2, () => {
chap("okay");
});
not(() => {
startShart(1 !== 1 && 2 !== 2, () => {
chap("Error");
});
});
  </code>
</pre>
