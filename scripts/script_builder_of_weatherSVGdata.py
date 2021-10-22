import os
from os import listdir
from os.path import isfile, join

svgrelative = "src\\pages\\dashboard\\components\\subcomponentsweather\\svg"
svglocation = os.path.abspath(svgrelative)
svg_filenames = [f for f in listdir(svglocation) if isfile(join(svglocation, f))]


with open("weatherSVGdata.js","w") as text:
	for index in svg_filenames:
		capitalised_text = index[0:-4].split("_")
		if len(capitalised_text) == 1:
			capitalised_text = capitalised_text[0].capitalize()
		if len(capitalised_text) == 2:
			capitalised_text = capitalised_text[0].capitalize()+capitalised_text[1].capitalize()

		text.write(f'import {{ ReactComponent as {capitalised_text} }} from "./svg/{index}"\n')
	
	text.write("\n")
	text.write("const WeatherSVGData = [\n")
	text.write("\t{\n")
	
	for index in svg_filenames:
		capitalised_text = index[0:-4].split("_")
		if len(capitalised_text) == 1:
			capitalised_text = capitalised_text[0].capitalize()
		if len(capitalised_text) == 2:
			capitalised_text = capitalised_text[0].capitalize()+capitalised_text[1].capitalize()

		text.write(f'\t\t{index[0:-4]}: <{capitalised_text} />,\n')

	text.write("\t},\n")	
	text.write("];\n")
	text.write("\n")
	text.write("export default WeatherSVGData;")


'''
#Old
with open("data.txt","r") as raw_data:
	svar=[]
	for index, line in enumerate(raw_data):
		data = line.split("</td>",1)[0]
		svar.append(data)
	
	#line = raw_data.readline()
	print("")

with open("weatherSVGdata.js","w") as text:
	text.write("{\n")
	
	for index in svar:
		text.write("\tname: "+index+",\n")
		text.write("\tsymbolDay: ,\n")
		text.write("\tsymbolNight: ,\n")
		text.write("\tsymbolTwilight: ,\n")

	text.write("},\n")	


print("")


'''