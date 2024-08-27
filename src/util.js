{
  /* <Box className="addText">
                    <Input
                      color="neutral"
                      placeholder="type your text here..."
                      size="sm"
                      variant="soft"
                      onChange={(e) => SetText(e.target.value)}
                    />
                  </Box> */
}
{
  //   !!text && (
  //     <Draggable
  //       axis="both"
  //       // bounds=".video"
  //       handle=".handle"
  //       defaultPosition={{ x: 0, y: 0 }}
  //       scale={1}
  //     >
  //       <div>
  //         <div className="handle">
  //           <div>{text}</div>
  //         </div>
  //       </div>
  //     </Draggable>
  //   );
}

export function formatTime(sec) {
  if(!!!sec || sec === 0){
    return "00:00:00"
  }

  const date = new Date(sec * 1000);
  return date.toISOString().substring(11, 19);
}
