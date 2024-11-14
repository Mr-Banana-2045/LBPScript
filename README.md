### Start
<pre>
  <LBPScript> .... </LBPScript>
</pre>

## Create Tabe >
<pre>
$name = true;
startTabe($name, ..., () => {
chap("text",":",$name");
});
</pre>
## Text Print >
<pre>
chap("hello");
chap("I","Am","Moz");
chap(2 * 5);
</pre>
## Create Shart >
<pre>
startShart(1 === 1 && 2 === 2, () => {
chap("okay");
});
not(() => {
startShart(1 !== 1 && 2 !== 2, () => {
chap("Error");
});
});
</pre>
