/**
 * Normal handling
 */
import { Node } from "../lib/models/contentNode"
import { checkContent }  from "../lib/contentsBuilder"
import YAML from "yamljs"
import fs from 'fs';
import path from 'path'


//  it('turns the json object into a node', ()=> {
//     let js = YAML.parse(yaml);
//     let newNode = new Node()
//     expect(new Node()).toHaveProperty('title')
//  })
 
//  it('doesnt build object if arguments are wrong', () => {
     
//  })

 it('It rejects an invalid contents metadata', () => {
    expect(checkContent(`${__dirname}/mocks/badContent.yaml`)).toBe(false)
 })

 it('It accepts valid contents metadata', () => {
   expect(checkContent(`${__dirname}/mocks/content.yaml`)).toBe(true)
})