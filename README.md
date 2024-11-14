<pre>
## Create Tabe >
$name = true;
startTabe($name, ..., () => {
chap("text",":",$name");
});

## Text Print >
chap("hello");
chap("I","Am","Moz");
chap(2 * 5);

## Create Shart >
startShart(1 === 1 && 2 === 2, () => {
chap("okay");
});
not(() => {
startShart(1 !== 1 && 2 !== 2, () => {
chap("Error");
});
});
</pre>
