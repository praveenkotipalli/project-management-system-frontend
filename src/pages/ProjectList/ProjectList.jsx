// import { Section } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import {  GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, MagnifyingGlassIcon, MixerHorizontalIcon } from "@radix-ui/react-icons";
import {  Link } from "lucide-react";
import { useState } from "react";
import ProjectCard from "../Project/ProjectCard";
// import SplineRocket from "@/custom/SplineRocket";
// import { relative } from "path";
// import { Link } from "lucide-react";
// import { Link } from "lucide-react";

export const tags = [
  "all", "react", "nextjs", "spring boot", "mysql", "nodejs", "express js", "python", "flask", "django", 
];

export default function ProjectList() {

  const [keyword, setKeyword] = useState("");


  const handleFilterChange = (section,value) =>{
    console.log("value", value, section);
  }

  const handleSearchChange = (e) => {
    setKeyword(e.target.value);
  }
  return (
    <>
    <div className='relative px-5 lg:px-0 justify-center lg:flex gap-5 py-5' style={{justifyContent:"center",textAlign:"center",alignContent:"center",alignItems:"", margin:"0px 10px"}}>
      <section className="filterSection">
        <Card className="p-5 sticky top-10">
          <div className="flex justify-between lg:w-[20rem]">
            <p className="text-xl -tracking-wider">filters</p>
            <Button variant="ghost" size="icon">
              <MixerHorizontalIcon/>
            </Button> 
          </div>
          <CardContent className="mt-5">
            <ScrollArea className="space-y-7 h-[70vh]">
              <div>
                <h1 className="pb-3 text-gray-400 border-b">
                  Category
                </h1>
                <div className="pt-5">
                  <RadioGroup  className="space-y-3 pt-5"defaultValue="all" onValueChange={(value)=>handleFilterChange("category", value)} >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="all" id="r1" />
                      <Label htmlFor="r1">all</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="fullstack" id="r2" />
                      <Label htmlFor="r2">Fullstack</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="frontend" id="r3" />
                      <Label htmlFor="r3">Frontend</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="backend" id="r4" />
                      <Label htmlFor="r4">Backend</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="pt-9">
                <h1 className="pb-3 text-gray-400 border-b">
                  Tags
                </h1>
                <div className="pt-5">
                  <RadioGroup className="space-y-3 pt-5" defaultValue="all" onValueChange={(value)=>handleFilterChange("tag", value)} >
                    {tags.map((item) => <div key={item} className="flex items-center gap-2 ">
                      <RadioGroupItem value={item} id={`r1-${item}`} />
                      <Label htmlFor={`r1-${item}`}>{item}</Label>
                    </div>)}
                  </RadioGroup>
                </div>
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </section>

      <section className="projectListSection w-full lg:w-[48rem]" style={{position:"relative"}} >
        <div className="flex gap-2 items-center pb-5 justify-between">
          <div className="relative p-0 w-full">
            <Input 
              onChange={handleSearchChange}
              placeholder="search project"
              className="40% px-9"
            />
            <MagnifyingGlassIcon className="absolute top-3 left-4" />
          </div>

        </div>
        <div>
          <div className="space-y-5 min-h-[74vh]" >
              {
                 
                  keyword?[1,1,1].map((item)=><ProjectCard key={item}/>):
                  [1,1,1,1].map((item)=><ProjectCard key={item}/>)
                
              }
          </div>
        </div>
      </section>

      <section >
      <Card className="p-3 sticky top-10">
          <div className="flex justify-between lg:w-[19rem]">
            <p className="text-xl -tracking-wider" style={{marginBottom:"20px"}}>Connect with us !</p>
            {/* <Button variant="ghost" size="icon">
              <MixerHorizontalIcon/>
            </Button>  */}
            <Link style={{width:"15px", height:"15px",marginTop:"10px"}}/>
          </div>
          <div  className="flex justify-between lg:w-[19rem]" style={{marginTop:"35px", marginBottom:"12px"}}>
              <a href="https://www.linkedin.com/in/praveen-kumar-kotipalli-5b0ba528a/"><LinkedInLogoIcon/></a>
              <a href="https://github.com/praveenkotipalli"><GitHubLogoIcon className="gitHubLogo"/></a>
              <a href="https://www.instagram.com/pr4veennn/"><InstagramLogoIcon className="instaLogo"/></a>
              {/* <a></a> */}
          </div>
        </Card>
        <div style={{position:"fixed"}} className="">
          {/* <SplineRocket/> */}
        </div>
      </section>
    </div>
    </>
  );
}